using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Domain.Notifications;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.Notifications
{
    public interface INotificationService
    {
        Task<Notification> PushToRoleAsync(string roleName, string title, string content, NotificationTypes type, string? senderId = default, string? objectUrl = default);
        Task<Notification> PushToUserAsync(string userId, string title, string content, NotificationTypes type, string? senderId = default, string? objectUrl = default);
        Task<Notification> PushToUsersAsync(string[] userIds, string title, string content, NotificationTypes type, string? senderId = default, string? objectUrl = default);
    }
}
