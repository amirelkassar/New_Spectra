using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;


namespace Spectra.Domain.Clients
{
    public record ClientCreatedEvent(Client Client) : BaseEvent(Guid.NewGuid(), DomainEventType.AfterCommit);

}
