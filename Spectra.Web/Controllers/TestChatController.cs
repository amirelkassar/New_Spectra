using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Spectra.Application.Chats.Commands;
using Spectra.Application.Chats.Hubs;
using Spectra.Application.Interfaces;

namespace Spectra.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestChatController(IHubContext<ChatHub, IChatHubClient> hubContext,
        ICurrentUser currentUser) : ControllerBase
    {
        private readonly IHubContext<ChatHub, IChatHubClient> hubContext = hubContext;

        [Authorize]
        [HttpPost]
        [Route("fake-message")]
        public async Task<IActionResult> SendMessage([FromForm] CreateMessageCommand input)
        {
            await hubContext.Clients.Users("784fa7e6-7228-4841-b653-6324eeac71f0")
                 .FakeMessage();

            return Ok();
        }
    }
}
