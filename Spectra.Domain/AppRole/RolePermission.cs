using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Spectra.Domain.AppRole
{
    public class RolePermission : BaseEntity<string>
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
        public string RoleId { get; set; }
        public string Permission { get; private set; }
        public static RolePermission Create(string id, string roleId, string permission) => new(id, roleId, permission);
    }
}
