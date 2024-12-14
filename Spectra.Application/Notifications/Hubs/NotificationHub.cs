using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

namespace Spectra.Application.Notifications.Hubs
{
    [Authorize]
    public class NotificationHub : Hub<INotificationClientHub>
    {

    }
}
