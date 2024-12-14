using Spectra.Application.Notifications.Dtos;

namespace Spectra.Application.Notifications.Hubs
{
    public interface INotificationClientHub
    {
        Task Receive(NotificationReadDto notification);
    }
}
