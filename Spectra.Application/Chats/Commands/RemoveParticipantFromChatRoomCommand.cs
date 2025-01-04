using MediatR;
using Spectra.Application.Chats.Services;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Chats.Commands
{
    public class RemoveParticipantFromChatRoomCommand : IRequest<OperationResult>
    {
        public string UserId { get; set; }
        public string ChatId { get; set; }
        //public bool RemoveMessages { get; set; }

        public class RemoveParticipantFromChatRoomCommandHandler(IChatService chatService) : IRequestHandler<RemoveParticipantFromChatRoomCommand, OperationResult>
        {
            private readonly IChatService _chatService = chatService;

            public async Task<OperationResult> Handle(RemoveParticipantFromChatRoomCommand request, CancellationToken cancellationToken)
            {
                await _chatService.RemoveParticipantFromChatAsync(request.ChatId, request.UserId);

                return OperationResult.Success();
            }
        }
    }
}
