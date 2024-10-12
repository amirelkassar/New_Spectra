using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Spectra.Domain.Shared.Common
{
    public abstract class BaseEntity<TKey> : IBaseEntity<TKey>
    {
        protected BaseEntity()
        {

        }
        protected BaseEntity(TKey id)
        {
            Id = id;
            ArgumentNullException.ThrowIfNull(id);
        }

        public TKey Id { get; protected set; }

        private readonly List<BaseEvent> _domainEvents = [];

        [NotMapped]
        public IReadOnlyCollection<BaseEvent> DomainEvents => _domainEvents.AsReadOnly();

        public string Notes { get; set; }

        public void AddDomainEvent(BaseEvent domainEvent) => _domainEvents.Add(domainEvent);

        public void RemoveDomainEvent(Guid eventId)
        {
            var domainEvent = _domainEvents.Find(e => e.Id == eventId);
            if (domainEvent != null)
            {
                _domainEvents.Remove(domainEvent);
            }
        }

        public void ClearDomainEvents() => _domainEvents.Clear();

        
    }

    public interface IBaseEntity<TKey>
    {
        TKey Id { get; }

        [NotMapped]
        IReadOnlyCollection<BaseEvent> DomainEvents { get; }

        void AddDomainEvent(BaseEvent domainEvent);
        void RemoveDomainEvent(Guid eventId);
        void ClearDomainEvents();

        string Notes {get; set; }
    }
}
