using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.Chats.Dtos
{
    public class MessageReadDto : BaseEntityDto<string>
    {

        public MessageType Type { get; set; }
        public string ChatId { get; set; }
        public string? ChatReference { get; set; }
        public string SenderId { get; set; }
        public string SenderName { get; set; }
        public string SenderImage { get; set; }
        public string? Content { get; set; }
        public string? FileUrl { get; set; }
    }
}
