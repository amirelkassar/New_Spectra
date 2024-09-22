using Microsoft.AspNetCore.SignalR;

namespace Spectra.Infrastructure.ChatHub
{
    public class ChatHub : Hub
    {
        public static Dictionary<string, string> ConnectedUsers = new();

        public override async Task OnConnectedAsync()
        {
            var username = Context.User?.Identity?.Name;
            if (!string.IsNullOrEmpty(username))
            {
                ConnectedUsers[username] = Context.ConnectionId;
            }
            await base.OnConnectedAsync();
        }
        public override async Task OnDisconnectedAsync(Exception exception)
        {
            var username = Context.User?.Identity?.Name;
            if (!string.IsNullOrEmpty(username))
            {
                ConnectedUsers.Remove(username);
            }
            await base.OnDisconnectedAsync(exception);
        }
    }
}
