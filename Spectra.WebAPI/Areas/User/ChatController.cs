using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.Chats.Commands;
using Spectra.Application.Chats.Queries;
using Spectra.Application.Interfaces;

namespace Spectra.WebAPI.Areas.User
{
    public class ChatController(ILogger<ChatController> logger,
        ICurrentUser currentUser,
        ISender sender) : UserControllerBase<ChatController>(logger, currentUser)
    {
        private readonly ISender _sender = sender;

        [HttpGet]
        [Route("list")]
        public async Task<IActionResult> GetListAsync()
        {
            var response = await _sender.Send(new GetChatListQuery());
            return Ok(response);
        }

        [HttpGet]
        [Route("messages")]
        public async Task<IActionResult> GetMessageListAsync([FromQuery] GetChatMessageListQuery input)
        {
            var response = await _sender.Send(input);
            return Ok(response);
        }
        [HttpPost]
        [Route("message")]
        public async Task<IActionResult> SendMessageAsync([FromForm] CreateMessageCommand input)
        {
            var response = await _sender.Send(input);
            return Created("",response);
        }

        [HttpDelete]
        [Route("message")]
        public async Task<IActionResult> DeleteessageAsync([FromQuery] RemoveMessageCommand input)
        {
            var response = await _sender.Send(input);
            return NoContent();
        }
    }
}
