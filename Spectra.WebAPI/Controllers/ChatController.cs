using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.ChatHub.Commands;
using Spectra.Application.ChatHub.Services;


namespace Spectra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChatController : ControllerBase
    {
        private readonly IChatService _chatService;

        public ChatController(IChatService chatService)
        {
            _chatService = chatService;
        }

     
         [AllowAnonymous]
        [HttpPost("send-private-message")]
        public async Task<IActionResult> SendPrivateMessage(SaveChatMessageCommand request)
        {
            await _chatService.SendMessageAsync(request.FromUser, request.ToUser, request.Message);
            return Ok(new { Message = "Message sent successfully." });
        }

        [AllowAnonymous]
        [HttpPost("broadcast-message")]
        public async Task<IActionResult> BroadcastMessage(SaveChatMessageCommand request)
        {
            await _chatService.BroadcastMessageAsync(request.FromUser, request.Message);
            return Ok(new { Message = "Broadcast message sent successfully." });
        }
    }

}
