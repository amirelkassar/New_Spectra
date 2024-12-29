using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Application.Chats.Dtos;

namespace Spectra.Application.Chats.Hubs
{
    public interface IChatHubClient
    {
        Task MessageAdded(MessageReadDto input);
        Task MessageRemoved(MessageReadDto input);
        Task ParticipantAdded(ChatParticipantReadDto input);
        Task ParticipantRemoved(ChatParticipantReadDto input);
        Task ChatCreated(ChatReadDto input);
        Task ChatDeleted(string id);
    }
}
