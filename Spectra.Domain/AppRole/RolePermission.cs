using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Spectra.Domain.AppRole
{
    public class RolePermission : IBaseEntity<string>
    {
        protected RolePermission()
        {

        }
        private RolePermission(string id,
            string roleId,
            string permission,
            string displayName)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(roleId, nameof(roleId));
            ArgumentNullException.ThrowIfNull(permission, nameof(permission));
            ArgumentNullException.ThrowIfNull(displayName, nameof(displayName));

            Id = id;
            RoleId = roleId;
            Permission = permission;
            DisplayName = displayName;
        }
        public string Id { get; private set; }
        public string RoleId { get; set; }
        public string Permission { get; private set; }
        public string DisplayName { get; private set; }


        private readonly List<BaseEvent> _domainEvents = [];

        [NotMapped]
        public IReadOnlyCollection<BaseEvent> DomainEvents => _domainEvents.AsReadOnly();

        public string? Notes { get; set; }

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

        public static RolePermission Create(string id, string roleId, string permission, string displayName) => new(id, roleId, permission, displayName);
    }
}
