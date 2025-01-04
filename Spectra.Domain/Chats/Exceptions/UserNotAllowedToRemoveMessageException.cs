using System;

namespace Spectra.Domain.Chats.Exceptions
{
    public class UserNotAllowedToRemoveMessageException() : Exception($"User is not allowed to remove this message or message not found")
    {
    }
}
