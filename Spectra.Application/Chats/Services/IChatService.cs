using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Spectra.Domain.Chats;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.Chats.Services
{
    public interface IChatService
    {
        Task<ChatRoom> CreateChatRoomAsync(ICollection<ChatRoomParticipant> participants, string title,string?reference=default, bool isGroup=false);
        Task<string> AddMessageAsync(string chatId, string userId, string? content = default, MessageType type = MessageType.Text, IFormFile? file = default);
        Task<string> RemoveMessageAsync(string chatId, string userId, string messageId);
        Task<string> AddParticipantToChatAsync(string chatId, string userId, ChatParticipantType type, DateTimeOffset? expirationDate, bool Expried = false, bool canSend = true);
        Task<string> RemoveParticipantFromChatAsync(string chatId, string userId);
        Task RemoveChatRoomAsync(string chatId);
    }
}
