using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Chats.Dtos
{
    public class ChatDetailReadDto
    {
        public ChatDetailReadDto()
        {
            Messages = [];
        }
        public string RoomName { get; set; }
        public bool IsGroup { get; set; }
        public string? LastMessage { get; set; }
        public DateTimeOffset LastMeesageDate { get; set; }
        public string? LastMessageUserId { get; set; }
        public string? Reference { get; set; }
        public string? ChatImage { get; set; }
        public ICollection<MessageReadDto> Messages { get; set; }
    }
}
