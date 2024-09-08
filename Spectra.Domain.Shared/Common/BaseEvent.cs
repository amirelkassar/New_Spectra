using MediatR;
using Spectra.Domain.Shared.Enums;
using System;

namespace Spectra.Domain.Shared.Common
{

    public record BaseEvent(Guid Id, DomainEventType EventType = DomainEventType.AfterCommit) : INotification
    {

    }
}
