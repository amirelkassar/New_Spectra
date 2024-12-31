using System;

namespace Spectra.Domain.Chats.Exceptions
{
    public class UserNotAllowedToCreateGroupException() : Exception($"User is not allowed to create groups")
    {
    }
}
