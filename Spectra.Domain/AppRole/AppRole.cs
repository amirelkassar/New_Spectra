﻿using Microsoft.AspNetCore.Identity;
using Spectra.Domain.Shared.Common;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System;

namespace Spectra.Domain.AppRole
{
    public class AppRole : IdentityRole , IBaseEntity<string>
    {
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
