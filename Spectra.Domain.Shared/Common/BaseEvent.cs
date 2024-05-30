using MediatR;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace Spectra.Domain.Shared.Common
{
    public record BaseEvent(Guid Id, DomainEventType EventType = DomainEventType.AfterCommit) : INotification
    {

    }
}
