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
        Task Receive(MessageReadDto input);
    }
}
