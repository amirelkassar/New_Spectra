using MediatR;
using Spectra.Application.Notifications;
using Spectra.Domain.Contracts.DomainEvents;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.Contracts.EventHandlers
{
    public class UpdateContractEventHandler(INotificationService notificationService) : INotificationHandler<ContractUpdateEvent>
    {
        private readonly INotificationService _notificationService = notificationService;

        public async Task Handle(ContractUpdateEvent notification, CancellationToken cancellationToken)
        {

            var contract = notification.Contract;

            switch (notification.Type)
            {
                case ContractChangeType.Admin:
                    {
                        await _notificationService.PushToUserAsync(contract.EmployeeHeadUserId,
                                $"Admin Updated Contract",
                                $"The admin has updated a contract of {contract.EmployeeName}",
                                NotificationTypes.System,
                                $"/doctor/contract/{contract.Id}");

                        await _notificationService.PushToUserAsync(contract.EmployeeUserId,
                                $"Admin Updated Contract",
                                $"The admin has updated the contract",
                                NotificationTypes.System,
                                $"/doctor/contract/{contract.Id}");
                    }
                        break;
                case ContractChangeType.Doctor:
                    {
                        await _notificationService.PushToRoleAsync(Roles.SystemAdmin,
                              $"{contract.EmployeeName} has updated a contract",
                              $"Dr Head {contract.EmployeeName} has updated his contract",
                              NotificationTypes.System,
                              $"/admin/contracts/{contract.Id}");

                        await _notificationService.PushToUserAsync(contract.EmployeeHeadUserId,
                                $"{contract.EmployeeName} Updated Contract",
                                $"Dr. {contract.EmployeeHeadName} of your department has updated his contract",
                                NotificationTypes.System,
                                $"/doctor/contract/{contract.Id}");
                    }
                    break;
                case ContractChangeType.Head:
                    {
                        await _notificationService.PushToRoleAsync(Roles.SystemAdmin,
                              $"{contract.EmployeeHeadName} has updated a contract",
                              $"Dr Head {contract.EmployeeHeadName} has updated a contract of {contract.EmployeeName}",
                              NotificationTypes.System,
                              $"/admin/contracts/{contract.Id}");

                        await _notificationService.PushToUserAsync(contract.EmployeeUserId,
                                $"{contract.EmployeeHeadName} Updated Contract",
                                $"Head Department Dr. {contract.EmployeeHeadName} has updated the contract",
                                NotificationTypes.System,
                                $"/doctor/contract/{contract.Id}");
                    }
                    break;
            }
        }
    }
}