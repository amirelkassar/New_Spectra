﻿using Microsoft.AspNetCore.Identity;
using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Spectra.Domain.AppUser
{
    public class AppUser : IdentityUser, IBaseEntity<string>
    {
        public string Name { get; set; }
        public string SurName { get; set; }
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
}
