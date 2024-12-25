using System;
using System.Collections.Generic;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Domain.Chats
{
    public class ChatRoom(string id, bool isGroup = false) : BaseAuditableEntity<string>(id)
    {
        public string RoomName { get; set; }
        public ICollection<ChatRoomParticipant> Participants { get; set; } = [];
        public bool IsGroup { get; private set; } = isGroup;
        public string? LastMessage { get; set; }
        public DateTimeOffset? LastMeesageDate { get; set; }
    }

    public class ChatMessage(string id, MessageType type,
        string chatId,
        string senderId) : BaseAuditableEntity<string>(id)
    {
        public MessageType Type { get; } = type;
        public string ChatId { get; } = chatId;
        public string SenderId { get; } = senderId;
        public string? Content { get; set; }
        public string? FileUrl { get; set; }
    }

    public class ChatRoomParticipant(string id, string userId) : BaseAuditableEntity<string>(id)
    {
        public string UserId { get; private set; } = userId;
        public ChatParticipantType Type { get; set; }
        public DateTimeOffset? ExprationDate { get; set; }
        public bool Expried { get; set; }
        public bool CanSend { get; set; }
    }
}
