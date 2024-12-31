using Spectra.Application.Hellper;
using Spectra.Domain.Shared.Common;

namespace Spectra.Application.Chats.Dtos
{
    public class ChatDetailReadDto : BaseEntityDto<string>
    {
        public ChatDetailReadDto()
        {
            Messages = new();
        }
        public string RoomName { get; set; }
        public bool IsGroup { get; set; }
        public string? LastMessage { get; set; }
        public DateTimeOffset LastMeesageDate { get; set; }
        public string? LastMessageUserId { get; set; }
        public string? Reference { get; set; }
        public string? ChatImage { get; set; }
        public PaginatedResult<MessageReadDto> Messages { get; set; }
    }
}
