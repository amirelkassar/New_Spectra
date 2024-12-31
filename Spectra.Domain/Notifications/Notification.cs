using System;
using System.Collections.Generic;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Domain.Notifications
{
    public class Notification : BaseAuditableEntity<string>
    {
        protected Notification() : base() { }
        public Notification(string id,
            string title,
            string content,
            NotificationTypes type,
            string? senderId = default,
            string? url = default) : base()
        {
            Id = id;
            Title = title;
            Content = content;
            SenderId = senderId;
            Type = type;
            ObjectUrl = url;
            Created = DateTimeOffset.UtcNow;
            Changes = [];
        }

        public string Title { get; private set; }
        public string Content { get; private set; }
        public string? SenderId { get; private set; }
        public NotificationTypes Type { get; private set; }
        public string? ObjectUrl { get; private set; }
        public ICollection<NotificationChange> Changes { get; private set; }
    }

    public class NotificationChange : BaseEntity<string>
    {
        protected NotificationChange() { }
        public NotificationChange(string id,
            string notificationId,
            string receiverId)
        {
            Id = id;
            NotificationId = notificationId;
            ReceiverId = receiverId;
            Status = NotificationChangeStatuses.Unread;
        }
        public NotificationChangeStatuses Status { get; set; }
        public string NotificationId { get; private set; }
        public string ReceiverId { get; private set; }
    }
}
