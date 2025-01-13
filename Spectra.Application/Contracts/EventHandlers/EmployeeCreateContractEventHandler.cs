using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Spectra.Application.Chats.Services;
using Spectra.Application.Commons.Dtos;
using Spectra.Application.Interfaces;
using Spectra.Application.Notifications;
using Spectra.Application.Templates.Models;
using Spectra.Application.Templates.Service;
using Spectra.Domain.AppUser;
using Spectra.Domain.Chats;
using Spectra.Domain.Contracts.DomainEvents;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.OptionDtos;

namespace Spectra.Application.Contracts.EventHandlers
{
    internal class EmployeeCreateContractEventHandler(INotificationService notificationService,
        IChatService chatService,
        UserManager<AppUser> userManager,
        ITemplateService templateService,
        IEmailSender emailSender,
        IServiceProvider serviceProvider,
        ICurrentUser currentUser) : INotificationHandler<EmployeeCreateContractEvent>
    {
        private readonly INotificationService _notificationService = notificationService;
        private readonly IChatService _chatService = chatService;
        private readonly UserManager<AppUser> _userManager = userManager;
        private readonly ITemplateService _templateService = templateService;
        private readonly IEmailSender _emailSender = emailSender;
        private readonly IServiceProvider _serviceProvider = serviceProvider;
        private readonly ICurrentUser _currentUser = currentUser;

        public async Task Handle(EmployeeCreateContractEvent notification, CancellationToken cancellationToken)
        {
            var contract = notification.Contract;
            var webClient = _serviceProvider.GetKeyedService<ClientSide>("spectra_web");

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
            await _chatService.CreateChatRoomAsync(participants, $"{contract.EmployeeName} Contract", contract.Id, false);

            var model = new ContractReceivedEmailTemplateModel
            {
                UserFullName=contract.EmployeeName,
            };

            var template = await _templateService.GetEmailTemplateAsync("ContractReceivedEmailTemplate.cshtml", model);
            await _emailSender.SendAsync(new EmailMetadata(_currentUser.Email, "no-reply spectra received your contract", template));
        }
    }
}
