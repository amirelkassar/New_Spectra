using Spectra.Domain.Shared.Common;

namespace Spectra.Application.Chats.Dtos
{
    public class ChatReadDto : BaseEntityDto<string>
    {
        public ChatReadDto()
        {
            Participants = [];
            LastMeesageDate = DateTime.UtcNow;
        }
        public string RoomName { get; set; }
        public ICollection<ChatParticipantReadDto> Participants { get; set; }
        public bool IsGroup { get; set; }
        public string? LastMessage { get; set; }
        public DateTimeOffset LastMeesageDate { get; set; }
        public string? LastMessageUserId { get; set; }
        public string? Reference { get; set; }
        public string? ChatImage { get; set; }
    }
}
