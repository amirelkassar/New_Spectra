using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Domain.Chats;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Chats.Commands
{
    public class RemoveParticipantFromChatRoomCommand : IRequest<OperationResult>
    {
        public string UserId { get; set; }
        public string ChatId { get; set; }
        public bool RemoveMessages { get; set; }

        public class RemoveParticipantFromChatRoomCommandHandler(IBaseMongoDbRepository<ChatRoom> chatRepository,
            IBaseMongoDbRepository<ChatMessage> messageRepository) : IRequestHandler<RemoveParticipantFromChatRoomCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<ChatRoom> _chatRepository = chatRepository;
            private readonly IBaseMongoDbRepository<ChatMessage> _messageRepository = messageRepository;

            public async Task<OperationResult> Handle(RemoveParticipantFromChatRoomCommand request, CancellationToken cancellationToken)
            {
                var chatRoom = await _chatRepository.GetByIdAsync(request.ChatId) ?? throw new NotFoundException(nameof(ChatRoom), request.ChatId);

                if (chatRoom.Participants.Any(p => p.UserId == request.UserId))
                {
                    var participant = chatRoom.Participants.First(u => u.UserId == request.UserId);
                    chatRoom.Participants.Remove(participant);
                    await _chatRepository.UpdateAsync(chatRoom);
                    if (request.RemoveMessages)
                    {
                        var (messages, total) = await _messageRepository.GetAllAsync(m => m.SenderId == request.UserId, null, 0, int.MaxValue);
                        Parallel.ForEach(messages, async msg => await _messageRepository.DeleteAsync(msg.Id));
                    }
                }

                return OperationResult.Success();
            }
        }
    }
}
