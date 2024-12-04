using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.AppRole
{
    public class PermissoinCategory : BaseEntity<string>
    {
        public PermissoinCategory(string id)
        {
            Permissions = [];
            Id = id;
            LogicalName = $"spectra_per_group_cat_{DateTime.UtcNow.ToFileTimeUtc()}";
        }
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string LogicalName { get; set; }
        public string PermissionGroupId { get; set; }
        public ICollection<Permission> Permissions { get; set; }
    }
}
