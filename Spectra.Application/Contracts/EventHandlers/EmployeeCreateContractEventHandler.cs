using MediatR;
using Microsoft.AspNetCore.Identity;
using Spectra.Application.Chats.Services;
using Spectra.Application.Notifications;
using Spectra.Domain.AppUser;
using Spectra.Domain.Chats;
using Spectra.Domain.Contracts.DomainEvents;
using Spectra.Domain.Notifications;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.Contracts.EventHandlers
{
    internal class EmployeeCreateContractEventHandler(INotificationService notificationService,
        IChatService chatService,
        UserManager<AppUser> userManager) : INotificationHandler<EmployeeCreateContractEvent>
    {
        private readonly INotificationService _notificationService = notificationService;
        private readonly IChatService _chatService = chatService;
        private readonly UserManager<AppUser> _userManager = userManager;

        public async Task Handle(EmployeeCreateContractEvent notification, CancellationToken cancellationToken)
        {
            var contract = notification.Contract;

            await _notificationService.PushToRoleAsync(Roles.SystemAdmin,
                            $"{contract.EmployeeName} submitted a contract",
                            $"A new contract added by {contract.EmployeeName}",
                            NotificationTypes.System,
                            $"/admin/contracts/{contract.Id}");

            await _notificationService.PushToUserAsync(contract.EmployeeHeadUserId,
                $"{contract.EmployeeName} submitted a contract",
                            $"A new contract added by {contract.EmployeeName}",
                            NotificationTypes.System,
                            $"/doctor/contract/{contract.Id}");
            var adminUsers = await _userManager.GetUsersInRoleAsync(Roles.SystemAdmin);
            var adminUser = adminUsers.First();
            var participants = new ChatRoomParticipant[]
            {
                new(Ulid.NewUlid().ToString(), contract.EmployeeUserId) {
                Type=ChatParticipantType.Participant,
                CanSend=true,
                Expried=false
                },
                new(Ulid.NewUlid().ToString(), adminUser.Id) {
                Type=ChatParticipantType.Admin,
                CanSend=true,
                Expried=false
                },
            };
            await _chatService.CreateChatRoomAsync(participants, $"{contract.EmployeeName} Contract",
            contract.Id,
            false);
        }
    }
}
