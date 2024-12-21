using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;
using Spectra.Application.Notifications;
using Spectra.Domain.Contracts.DomainEvents;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.Contracts.EventHandlers
{
    public class ContractCancelationEventHandler(INotificationService notificationService) : INotificationHandler<ContractCancelationEvent>
    {
        private readonly INotificationService _notificationService = notificationService;

        public async Task Handle(ContractCancelationEvent notification, CancellationToken cancellationToken)
        {
            var contract = notification.Contract;

            switch (notification.Type)
            {
                case ContractChangeType.Admin:
                    {
                        await _notificationService.PushToUserAsync(contract.EmployeeHeadUserId,
                                $"Admin Canceld The Contract",
                                $"The admin has canceled a contract of {contract.EmployeeName}",
                                NotificationTypes.System,
                                $"/doctor/contract/{contract.Id}");

                        await _notificationService.PushToUserAsync(contract.EmployeeUserId,
                                $"Admin Canceld The Contract",
                                $"The admin has canceled the contract",
                                NotificationTypes.System,
                                $"/doctor/contract/{contract.Id}");
                    }
                    break;
                case ContractChangeType.Doctor:
                    {
                        await _notificationService.PushToRoleAsync(Roles.SystemAdmin,
                              $"{contract.EmployeeName} has canceled a contract",
                              $"Dr Head {contract.EmployeeName} has canceled his contract",
                              NotificationTypes.System,
                              $"/admin/contracts/{contract.Id}");

                        await _notificationService.PushToUserAsync(contract.EmployeeHeadUserId,
                                $"{contract.EmployeeName} canceled Contract",
                                $"Dr. {contract.EmployeeHeadName} of your department has canceled his contract",
                                NotificationTypes.System,
                                $"/doctor/contract/{contract.Id}");
                    }
                    break;
                case ContractChangeType.Head:
                    {
                        await _notificationService.PushToRoleAsync(Roles.SystemAdmin,
                              $"{contract.EmployeeHeadName} has canceled a contract",
                              $"Dr Head {contract.EmployeeHeadName} has canceled a contract of {contract.EmployeeName}",
                              NotificationTypes.System,
                              $"/admin/contracts/{contract.Id}");

                        await _notificationService.PushToUserAsync(contract.EmployeeUserId,
                                $"{contract.EmployeeHeadName} canceled Contract",
                                $"Head Department Dr. {contract.EmployeeHeadName} has canceled the contract",
                                NotificationTypes.System,
                                $"/doctor/contract/{contract.Id}");
                    }
                    break;
            }
        }
    }
}
