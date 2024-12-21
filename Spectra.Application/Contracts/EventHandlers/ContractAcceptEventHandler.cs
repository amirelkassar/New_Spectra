using MediatR;
using Spectra.Application.Notifications;
using Spectra.Domain.Contracts.DomainEvents;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.Contracts.EventHandlers
{
    public class ContractAcceptEventHandler(INotificationService notificationService) : INotificationHandler<ContractChangeEvent>
    {
        private readonly INotificationService _notificationService = notificationService;

        public async Task Handle(ContractChangeEvent notification, CancellationToken cancellationToken)
        {
            var contract = notification.Contract;

            switch (notification.Type)
            {
                case ContractChangeType.Admin:
                    {
                        var headMsgTitle = notification.Value ? $"Admin Accepted Contract" : "Admin Rejected Contract";
                        var headMsgContent = notification.Value ? $"The admin has accepted a contract of {contract.EmployeeName}" : $"The admin has rejected a contract of {contract.EmployeeName}";

                        await _notificationService.PushToUserAsync(contract.EmployeeHeadUserId,
                                headMsgTitle,
                               headMsgContent,
                                NotificationTypes.System,
                                $"/doctor/contract/{contract.Id}");

                        var empMsgTitle = notification.Value ? $"Admin Accepted Contract" : "Admin Rejected Contract";
                        var empMsgContent = notification.Value ? $"The admin has accepted the contract" : $"The admin has rejected the contract";
                        await _notificationService.PushToUserAsync(contract.EmployeeUserId,
                               empMsgTitle,
                               empMsgContent,
                                NotificationTypes.System,
                                $"/doctor/contract/{contract.Id}");
                    }
                    break;
                case ContractChangeType.Doctor:
                    {
                        var adminMsgTitle = notification.Value ? $"{contract.EmployeeName} has accepted a contract" : $"{contract.EmployeeName} has rejected a contract";
                        var adminMsgContent = notification.Value ? $"Dr Head {contract.EmployeeName} has accepted his contract" : $"Dr Head {contract.EmployeeName} has rejected his contract";

                        await _notificationService.PushToRoleAsync(Roles.SystemAdmin,
                             adminMsgTitle,
                              adminMsgContent,
                              NotificationTypes.System,
                              $"/admin/contracts/{contract.Id}");

                        var headMsgTitle = notification.Value ? $"{contract.EmployeeName} Accepted Contract" : $"{contract.EmployeeName} Rejected Contract";
                        var headMsgContent = notification.Value ? $"Dr. {contract.EmployeeHeadName} of your department has accepted his contract" : $"Dr. {contract.EmployeeHeadName} of your department has rejected his contract";

                        await _notificationService.PushToUserAsync(contract.EmployeeHeadUserId,
                                headMsgTitle,
                                headMsgContent,
                                NotificationTypes.System,
                                $"/doctor/contract/{contract.Id}");
                    }
                    break;
                case ContractChangeType.Head:
                    {
                        var adminMsgTitle = notification.Value ? $"{contract.EmployeeHeadName} has accepted a contract" : $"{contract.EmployeeHeadName} has rejected a contract";
                        var adminMsgContent = notification.Value ? $"Dr Head {contract.EmployeeHeadName} has accepted a contract of {contract.EmployeeName}" : $"Dr Head {contract.EmployeeHeadName} has rejected a contract of {contract.EmployeeName}";

                        await _notificationService.PushToRoleAsync(Roles.SystemAdmin,
                              $"{contract.EmployeeHeadName} has accepted a contract",
                              $"Dr Head {contract.EmployeeHeadName} has accepted a contract of {contract.EmployeeName}",
                              NotificationTypes.System,
                              $"/admin/contracts/{contract.Id}");


                        var empMsgTitle = notification.Value ? $"{contract.EmployeeHeadName} Accepted Contract" : $"{contract.EmployeeHeadName} Rejected Contract";
                        var empMsgContent = notification.Value ? $"Head Department Dr. {contract.EmployeeHeadName} has accepted the contract" : $"Head Department Dr. {contract.EmployeeHeadName} has rejected the contract";

                        await _notificationService.PushToUserAsync(contract.EmployeeUserId,
                                empMsgTitle,
                                empMsgContent,
                                NotificationTypes.System,
                                $"/doctor/contract/{contract.Id}");
                    }
                    break;
            }
        }
    }
}
