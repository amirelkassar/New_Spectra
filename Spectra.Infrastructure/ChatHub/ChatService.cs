using MediatR;
using Microsoft.AspNetCore.SignalR;
using Spectra.Application.ChatHub.Commands;
using Spectra.Application.ChatHub.Services;

namespace Spectra.Infrastructure.ChatHub
{
    public class ChatService : IChatService
    {
        private readonly IHubContext<ChatHub> _hubContext;
        private readonly IMediator _mediator;

        public ChatService(IHubContext<ChatHub> hubContext, IMediator mediator)
        {
            _hubContext = hubContext;
            _mediator = mediator;
        }

        // Send a private message and save the chat
        public async Task SendMessageAsync(string fromUser, string toUser, string message)
        {
            
            if (ChatHub.ConnectedUsers.TryGetValue(toUser, out string connectionId))
            {
                await _hubContext.Clients.Client(connectionId).SendAsync("ReceiveMessage", fromUser, message);
            }

            // Save the message in the database using Mediator
            var saveChatCommand = new SaveChatMessageCommand { FromUser = fromUser, ToUser = toUser, Message = message };
            await _mediator.Send(saveChatCommand);
        }

        // Broadcast a message to all connected clients and save the chat
        public async Task BroadcastMessageAsync(string fromUser, string message)
        {

            await _hubContext.Clients.All.SendAsync("ReceiveMessage", fromUser, message);

            // Save the broadcast message
            var saveChatCommand = new SaveChatMessageCommand { FromUser = fromUser,  ToUser=null, Message= message }; // null for public/broadcast messages
            await _mediator.Send(saveChatCommand);
        }
    }
}
