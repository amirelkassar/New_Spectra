using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Domain.Chats;
using Spectra.Domain.Chats.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Chats.Commands
{
    public class CreateMessageCommand : IRequest<OperationResult>
    {
        public string ChatId { get; set; }
        public MessageType Type { get; set; }
        public string? Content { get; set; }
        public IFormFile? File { get; set; }

        public class CreateMessageCommandHandler(IBaseMongoDbRepository<ChatRoom> chatRepository,
            IBaseMongoDbRepository<ChatMessage> messageRepository,
            ICurrentUser currentUser,
            IDocumentHellper documentHellper) : IRequestHandler<CreateMessageCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<ChatRoom> _chatRepository = chatRepository;
            private readonly IBaseMongoDbRepository<ChatMessage> _messageRepository = messageRepository;
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IDocumentHellper _documentHellper = documentHellper;

            public async Task<OperationResult> Handle(CreateMessageCommand request, CancellationToken cancellationToken)
            {
                var chat = await _chatRepository.GetAsync(c => c.Id == request.ChatId && c.Participants.Any(p => p.UserId == _currentUser.Id && p.CanSend == true))
                    ?? throw new UserNotAllowedToSendMessageException();

                string filePath = null;

                if (request.File is not null)
                {
                    var folderPath = Path.Combine(Pathes.GetUsersPath(), _currentUser.Id);
                    filePath = await _documentHellper.CreateAttachment(request.File, folderPath);
                }

                var message = new ChatMessage(Ulid.NewUlid().ToString(), request.Type, request.ChatId, _currentUser.Id)
                {
                    Content = request.Content,
                    FileUrl = filePath
                };

                await _messageRepository.AddAsync(message);

                return OperationResult<string>.Success(message.Id);
            }
        }
    }
}
