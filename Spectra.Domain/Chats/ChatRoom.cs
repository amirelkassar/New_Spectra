using System.Collections.Generic;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Domain.Chats
{
    public class ChatRoom(bool isGroup = false) : BaseAuditableEntity<string>()
    {
        public ICollection<ChatRoomParticipant> Participants { get; set; }
        public bool IsGroup { get; private set; } = isGroup;
    }

    public class ChatMessage( MessageType type,
        string chatId,
        string senderId) : BaseAuditableEntity<string>()
    {
        public MessageType Type { get; } = type;
        public string ChatId { get; } = chatId;
        public string SenderId { get; } = senderId;
        public string? Content { get; set; } 
        public string? FileUrl { get; set; }
    }

    public class ChatRoomParticipant() : BaseAuditableEntity<string>()
    {
        public string UserId { get; set; }
        public ChatParticipantType Type { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
    }
}
