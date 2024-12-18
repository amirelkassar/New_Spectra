using FluentValidation;
using Mapster;
using MediatR;
using Spectra.Application.Chats.Dtos;
using Spectra.Application.Identities;
using Spectra.Application.Interfaces;
using Spectra.Domain.AppUser;
using Spectra.Domain.Chats;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Chats.Commands
{
    public class CreateChatRoomCommand : IRequest<OperationResult>
    {
        public CreateChatRoomCommand()
        {
            Participants = [];
        }
        public bool IsGroup { get; set; }
        public ICollection<CreateParticipantDto> Participants { get; set; }
        public string? RoomName { get; set; }

        public class CreateChatRoomCommandHandler(IBaseMongoDbRepository<ChatRoom> chatRepository,
            IIdentityService identityService) : IRequestHandler<CreateChatRoomCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<ChatRoom> _chatRepository = chatRepository;
            private readonly IIdentityService _identityService = identityService;

            public async Task<OperationResult> Handle(CreateChatRoomCommand request, CancellationToken cancellationToken)
            {
                var users = (OperationResult<ICollection<AppUser>>)await _identityService.FindByIdListAsync([.. request.Participants.Select(p => p.UserId)]);
                if (users == null || users.Data.Count <= 0)
                {
                    throw new NotFoundException("users", request.Participants);
                }
                request.RoomName ??= $"new chat {DateTimeOffset.UtcNow}";
                var chatRoom = new ChatRoom(Ulid.NewUlid().ToString(),request.IsGroup)
                {
                    RoomName = request.RoomName,
                };

                foreach (var participant in request.Participants)
                {
                    chatRoom.Participants.Add(participant.Adapt<ChatRoomParticipant>());
                }

                await _chatRepository.AddAsync(chatRoom);

                return OperationResult<string>.Success(chatRoom.Id);
            }
        }
    }

    public class CreateChatRoomCommandValidator : AbstractValidator<CreateChatRoomCommand>
    {
        public CreateChatRoomCommandValidator()
        {
            RuleFor(c => c.Participants)
                .NotEmpty()
                .NotNull()
                .Must(p => p.Count() > 0);
        }
    }

}
