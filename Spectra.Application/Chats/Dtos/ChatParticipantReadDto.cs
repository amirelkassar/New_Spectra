using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.Chats.Dtos
{
    public class ChatParticipantReadDto
    {
        public string UserId { get; set; }
        public ChatParticipantType Type { get; set; }
        public DateTimeOffset? ExprationDate { get; set; }
        public bool Expried { get; set; }
        public bool CanSend { get; set; }
    }
}
