using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Chats.Exceptions
{
    public class UserNotAllowedToRemoveMessageException() : Exception($"User is not allowed to remove this message or message not found")
    {
    }
}
