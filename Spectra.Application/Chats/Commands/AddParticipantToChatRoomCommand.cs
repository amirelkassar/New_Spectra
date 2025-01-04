using MediatR;
using Spectra.Application.Chats.Dtos;
using Spectra.Application.Chats.Services;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Chats.Commands
{
    public class AddParticipantToChatRoomCommand : ChatParticipantReadDto, IRequest<OperationResult>
    {
        public string ChatId { get; set; }
        public string UserId { get; set; }
        public class AddParticipantToChatRoomCommandHandler(IChatService chatService) : IRequestHandler<AddParticipantToChatRoomCommand, OperationResult>
        {
            private readonly IChatService _chatService = chatService;

            public async Task<OperationResult> Handle(AddParticipantToChatRoomCommand request, CancellationToken cancellationToken)
            {
                await _chatService.AddParticipantToChatAsync(request.ChatId, request.UserId, Domain.Shared.Enums.ChatParticipantType.Participant, null);

                return OperationResult.Success();
            }
        }
    }
}
