using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
