using System;

namespace Spectra.Infrastructure.ChatHub
{
    public class SendPrivateMessageRequest
    {
        public string FromUser { get; set; }
        public string ToUser { get; set; }
        public string Message { get; set; }
        public DateTime Timestamp { get; set; }
    }
}
