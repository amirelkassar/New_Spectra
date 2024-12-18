using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;
using Spectra.Application.Identities;
using Spectra.Application.Notifications;
using Spectra.Domain.AppUser;
using Spectra.Domain.AppUser.DomainEvents;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.AppUsers.EventHandlers
{
    internal class OnNewUserRegisterEventHandler(IIdentityService identityService,
        INotificationService notificationService) : INotificationHandler<OnNewUserRegisterEvent>
    {
        private readonly IIdentityService _identityService = identityService;
        private readonly INotificationService _notificationService = notificationService;

        public async Task Handle(OnNewUserRegisterEvent notification, CancellationToken cancellationToken)
        {
            var userResult = (OperationResult<AppUser>)await _identityService.FindByIdAsync(notification.UserId);
            var user = userResult.Data;
            var url = notification.Role switch
            {
                Roles.Specialist => $"/admin/staff/{notification.EmployeeId}",
                Roles.Doctor => $"/admin/staff/{notification.EmployeeId}",
                Roles.Client => $"/admin/clients/{notification.ClientId}",
                _ => string.Empty
            };
            var title = notification.Role switch
            {
                Roles.Specialist => $"New Specialist User",
                Roles.Doctor => $"New Doctor User",
                Roles.Client => $"New Client User",
                _ => string.Empty
            };
            await _notificationService.PushToRoleAsync(Roles.SystemAdmin,
                    title: title,
                    content: $"{user.Name} A new user has just registered",
                    NotificationTypes.System,
                    objectUrl: url);
        }
    }
}
