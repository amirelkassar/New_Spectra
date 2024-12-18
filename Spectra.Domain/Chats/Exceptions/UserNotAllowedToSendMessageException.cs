using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Chats.Exceptions
{
    public class UserNotAllowedToSendMessageException():Exception("User is not allowed to send message in this chat")
    {
    }
}
