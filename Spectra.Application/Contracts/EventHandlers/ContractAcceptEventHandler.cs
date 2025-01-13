using MediatR;
using Microsoft.Extensions.Logging;
using Spectra.Application.Commons.Dtos;
using Spectra.Application.Contracts.Queries;
using Spectra.Application.Interfaces;
using Spectra.Application.Notifications;
using Spectra.Application.Templates.Models;
using Spectra.Application.Templates.Service;
using Spectra.Domain.Contracts.DomainEvents;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.EventHandlers
{
    public class ContractAcceptEventHandler(INotificationService notificationService,
        ITemplateService templateService,
            IEmailSender emailSender,
            IBaseMongoDbRepository<Employee> employeeRepository,
            ISender sender,
            ILogger<ContractAcceptEventHandler> logger) : INotificationHandler<ContractChangeEvent>
    {
        private readonly INotificationService _notificationService = notificationService;
        private readonly ITemplateService _templateService = templateService;
        private readonly IEmailSender _emailSender = emailSender;
        private readonly IBaseMongoDbRepository<Employee> _employeeRepository = employeeRepository;
        private readonly ISender _sender = sender;
        private readonly ILogger<ContractAcceptEventHandler> _logger = logger;

        public async Task Handle(ContractChangeEvent notification, CancellationToken cancellationToken)
        {
            var contract = notification.Contract;

            var employee = await _employeeRepository.GetByIdAsync(contract.EmployeeId);
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

            if (contract.ContractState==ContractConses.ContractStates.Accepted)
            {
                var contractPdfResult = (OperationResult<byte[]>)await _sender.Send(new GetContractTemplateQuery { UserId = employee.UserId });

                using var stream = new MemoryStream(contractPdfResult.Data);

                var emailAttachment = new EmailAttachment($"{employee.Id}.pdf", "application/pdf", stream);

                var model = new ContractSignedEmailTemplateModel
                {
                    UserFullName = $"{employee.Name.FirstName} {employee.Name.LastName}",
                };

                var template = await _templateService.GetEmailTemplateAsync("ContractSignedEmailTemplate.cshtml", model);
                await _emailSender.SendAsync(new EmailMetadata(employee.EmailAddress.Emailaddress, "no-reply congrats , spectra accepted your contract", template, [emailAttachment]));
            }
           
        }
    }
}
