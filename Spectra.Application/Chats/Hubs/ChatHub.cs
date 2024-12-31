using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

namespace Spectra.Application.Chats.Hubs
{
    [Authorize]
    public class ChatHub : Hub<IChatHubClient>
    {


        public override Task OnConnectedAsync()
        {
            var user = Context.User;
            return base.OnConnectedAsync();
        }
    }
}
