using System;
using MediatR;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Domain.Shared.Common
{

    public record BaseEvent : INotification
    {
        public BaseEvent(DomainEventType EventType = DomainEventType.AfterCommit)
        {
            this.EventType = EventType;
            Id = Guid.NewGuid();
        }
        public Guid Id { get; private set; }
        public DomainEventType EventType { get; }
    }
}
