using MediatR;
using Spectra.Application.Messaging;
using Spectra.Infrastructure.ChatHub;

namespace Spectra.Application.ChatHub.Commands
{
    public class SaveChatMessageCommand : ICommand<Unit>
    {
        public string FromUser { get; set; }
        public string ToUser { get; set; }
        public string Message { get; set; }
        public DateTime Timestamp { get; set; }
    }
    public class SaveChatMessageCommandHandler : IRequestHandler<SaveChatMessageCommand, Unit>
    {
        private readonly IChatRepository _chatRepository;

        public SaveChatMessageCommandHandler(IChatRepository chatRepository)
        {
            _chatRepository = chatRepository;
        }

        public async Task<Unit> Handle(SaveChatMessageCommand request, CancellationToken cancellationToken)
        {
            var chatMessage = new SendPrivateMessageRequest
            {
                FromUser = request.FromUser,
                ToUser = request.ToUser,
                Message = request.Message,
                Timestamp = request.Timestamp
            };

            await _chatRepository.AddAsync(chatMessage);

            return Unit.Value;
        }
    }
}


