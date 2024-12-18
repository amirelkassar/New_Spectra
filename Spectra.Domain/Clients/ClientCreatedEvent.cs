using System;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;


namespace Spectra.Domain.Clients
{
    public record ClientCreatedEvent(Client Client) : BaseEvent(DomainEventType.AfterCommit);

}
