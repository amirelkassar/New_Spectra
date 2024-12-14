using Spectra.Application.Notifications.Dtos;

namespace Spectra.Application.Notifications.Hubs
{
    public interface INotificationClientHub
    {
        Task PushToAdmin(NotificationReadDto notification);
        Task PushToUser(NotificationReadDto notification, string userId);
        Task PushToRole(NotificationReadDto notification, string userId);
    }
}
