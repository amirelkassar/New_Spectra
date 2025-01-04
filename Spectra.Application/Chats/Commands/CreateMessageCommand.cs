using Mapster;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Chats.Dtos;
using Spectra.Application.Chats.Services;
using Spectra.Application.Interfaces;
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

        public class CreateMessageCommandHandler(ICurrentUser currentUser,
            IChatService chatService) : IRequestHandler<CreateMessageCommand, OperationResult>
        {
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IChatService _chatService = chatService;

            public async Task<OperationResult> Handle(CreateMessageCommand request, CancellationToken cancellationToken)
            {
                var message = await _chatService.AddMessageAsync(request.ChatId, _currentUser.Id, request.Content, request.Type, request.File);
                var messageDto = message.Adapt<MessageReadDto>();

                return OperationResult<MessageReadDto>.Success(messageDto);
            }
        }
    }
}
