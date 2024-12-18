using System;
using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.AppUser
{
    public record UserCreatedEvent : BaseEvent
    {
        public UserCreatedEvent(AppUser newUser) : base(Shared.Enums.DomainEventType.AfterCommit)
        {
            NewUser = newUser;
        }

        public AppUser NewUser { get; }
    }
}
