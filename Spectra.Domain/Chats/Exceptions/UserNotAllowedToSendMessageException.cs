using System;

namespace Spectra.Domain.Chats.Exceptions
{
    public class UserNotAllowedToSendMessageException() : Exception("User is not allowed to send message in this chat")
    {
    }
}
