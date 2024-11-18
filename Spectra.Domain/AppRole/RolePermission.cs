using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.AppRole
{
    public class RolePermission : IBaseEntity<string>
    {
        protected RolePermission()
        {

        }
        private RolePermission(string id,
            string roleId,
            string permission)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(roleId, nameof(roleId));
            ArgumentNullException.ThrowIfNull(permission, nameof(permission));
            Id = id;
            RoleId = roleId;
            Permission = permission;
        }
        public string Id { get; private set; }
        public string RoleId { get; private set; }
        public string Permission { get; private set; }


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
    }
}
