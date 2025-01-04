using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

namespace Spectra.Application.Notifications.Hubs
{
    [Authorize]
    public class NotificationHub : Hub<INotificationClientHub>
    {

        public override Task OnConnectedAsync()
        {
            var user = Context.User;
            return base.OnConnectedAsync();
        }
    }
}
