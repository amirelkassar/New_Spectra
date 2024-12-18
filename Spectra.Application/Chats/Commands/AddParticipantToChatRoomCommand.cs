using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mapster;
using MediatR;
using Spectra.Application.Chats.Dtos;
using Spectra.Application.Interfaces;
using Spectra.Domain.Chats;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Chats.Commands
{
    public class AddParticipantToChatRoomCommand : CreateParticipantDto, IRequest<OperationResult>
    {
        public string ChatId { get; set; }
        public class AddParticipantToChatRoomCommandHandler(IBaseMongoDbRepository<ChatRoom> chatRepository) : IRequestHandler<AddParticipantToChatRoomCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<ChatRoom> _chatRepository = chatRepository;

            public async Task<OperationResult> Handle(AddParticipantToChatRoomCommand request, CancellationToken cancellationToken)
            {
                var chatRoom = await _chatRepository.GetByIdAsync(request.ChatId) ?? throw new NotFoundException(nameof(ChatRoom), request.ChatId);
                var participant = new ChatRoomParticipant(Ulid.NewUlid().ToString(), request.UserId)
                {
                    ExprationDate = request.ExprationDate,
                    Type = request.Type,
                    Expried = request.Expried,
                    CanSend = request.CanSend,
                };
                if (participant is not null && !chatRoom.Participants.Any(p => p.UserId == participant.UserId))
                {
                    chatRoom.Participants.Add(participant);
                }

                await _chatRepository.UpdateAsync(chatRoom);

                return OperationResult.Success();
            }
        }
    }
}
