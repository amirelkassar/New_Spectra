using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.AppRole
{
    public class PermissionGroup : BaseEntity<string>
    {
        public PermissionGroup(string id)
        {
            Categories = [];
            Id = id;
            LogicalName = $"spectra_per_group_{DateTime.UtcNow.ToFileTimeUtc()}";
        }
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string LogicalName { get; private set; } 
        public ICollection<PermissoinCategory> Categories { get; set; }
    }
}
