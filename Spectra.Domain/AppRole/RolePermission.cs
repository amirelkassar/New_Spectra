using System;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Constants;

namespace Spectra.Domain.AppRole
{
    public class RolePermission : BaseEntity<string>
    {
        protected RolePermission()
        {

        }
        private RolePermission(string id,
            string roleId,
            string permission,
            string permissoinId,
            string categoryId,
            string groupId,
            AccessLevel accessLevel)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(roleId, nameof(roleId));
            ArgumentNullException.ThrowIfNull(permission, nameof(permission));
            ArgumentNullException.ThrowIfNull(permissoinId, nameof(permissoinId));
            ArgumentNullException.ThrowIfNull(categoryId, nameof(categoryId));
            ArgumentNullException.ThrowIfNull(groupId, nameof(groupId));
            ArgumentNullException.ThrowIfNull(accessLevel, nameof(accessLevel));

            Id = id;
            RoleId = roleId;
            Permission = permission;
            PermissoinId = permissoinId;
            PermissoinCategoryId = categoryId;
            PermissoinGroupId = groupId;
            AccessLevel = accessLevel;
        }
        public string RoleId { get; set; }
        public string Permission { get; private set; }
        public string PermissoinId { get; private set; }
        public string PermissoinCategoryId { get; private set; }
        public string PermissoinGroupId { get; private set; }

        public AccessLevel AccessLevel { get; set; }

        public static RolePermission Create(string id,
            string roleId,
            string permission,
            string permissoinId,
            string categoryId,
            string groupId,
            AccessLevel accessLevel) => new(id, roleId, permission, permissoinId, categoryId, groupId, accessLevel);
    }
}
