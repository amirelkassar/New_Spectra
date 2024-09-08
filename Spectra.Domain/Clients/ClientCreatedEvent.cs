using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Clients
{
    public record ClientCreatedEvent(Client Client) : BaseEvent(Guid.NewGuid(), DomainEventType.AfterCommit);

}
