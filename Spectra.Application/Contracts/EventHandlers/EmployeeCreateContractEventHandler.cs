using MediatR;
using Spectra.Application.Notifications;
using Spectra.Domain.Contracts.DomainEvents;
using Spectra.Domain.Notifications;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.Contracts.EventHandlers
{
    internal class EmployeeCreateContractEventHandler(INotificationService notificationService) : INotificationHandler<EmployeeCreateContractEvent>
    {
        private readonly INotificationService _notificationService = notificationService;

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
        }
    }
}
