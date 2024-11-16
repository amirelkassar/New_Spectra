using Spectra.Domain.Shared.Common;
using System;

namespace Spectra.Domain.AppUser
{
    public record UserCreatedEvent : BaseEvent
    {
        public UserCreatedEvent(AppUser newUser) : base(Guid.NewGuid())
        {
            NewUser = newUser;
        }

        public AppUser NewUser { get; }
    }
}
