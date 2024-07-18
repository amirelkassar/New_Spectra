using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;

namespace Spectra.Domain.Shared.Common
{
    public abstract class BaseEntity<TKey>
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

        public void AddDomainEvent(BaseEvent domainEvent) => _domainEvents.Add(domainEvent);

        public void RemoveDomainEvent(Guid eventId)
        {
            var domainEvent=_domainEvents.Find(e => e.Id == eventId);
            if (domainEvent != null)
            {
                _domainEvents.Remove(domainEvent);
            }
        }

        public void ClearDomainEvents() => _domainEvents.Clear();
    }
}
