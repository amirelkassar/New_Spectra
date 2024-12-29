using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

namespace Spectra.Application.Chats.Hubs
{
    [Authorize]
    public class ChatHub : Hub<IChatHubClient>
    {

    }
}
