using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.AppUser
{
    public class AppUser : IdentityUser, IBaseAuditableEntity<string>
    {
        public AppUser() : base()
        {
            Created = DateTimeOffset.UtcNow;
        }
        public string Name { get; set; }
        public string SurName { get; set; }
        public string? UserImage { get; set; }
        private readonly List<BaseEvent> _domainEvents = [];

        [NotMapped]
        public IReadOnlyCollection<BaseEvent> DomainEvents => _domainEvents.AsReadOnly();

        public string? Notes { get; set; }

        public DateTimeOffset? Created { get; private set; }

        public string? CreatedBy { get; private set; }

        public DateTimeOffset? LastModified { get; set; }
        public string? LastModifiedBy { get; set; }

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

        public void SetCreator(string id)
        {
            CreatedBy ??= id;
            Created ??= DateTimeOffset.UtcNow;
        }
    }
}
