using MediatR;
using Spectra.Application.Chats.Services;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Chats.Commands
{
    public class RemoveMessageCommand : IRequest<OperationResult>
    {
        public string ChatId { get; set; }
        public string MessageId { get; set; }

        public class RemoveMessageCommandHandler(IChatService chatService,
            ICurrentUser currentUser) : IRequestHandler<RemoveMessageCommand, OperationResult>
        {
            private readonly IChatService _chatService = chatService;
            private readonly ICurrentUser _currentUser = currentUser;

            public async Task<OperationResult> Handle(RemoveMessageCommand request, CancellationToken cancellationToken)
            {
                await _chatService.RemoveMessageAsync(request.ChatId, _currentUser.Id, request.MessageId);

                return OperationResult.Success();
            }
        }
    }
}
