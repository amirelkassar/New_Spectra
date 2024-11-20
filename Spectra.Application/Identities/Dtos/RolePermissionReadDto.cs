using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Identities.Dtos
{
    public class RolePermissionReadDto
    {
        public RolePermissionReadDto()
        {
            PermissionGroups = [];
        }
        public string Name { get; set; }
        public ICollection<PermissionGroup> PermissionGroups { get; set; }
    }

    public class PermissionGroup
    {
        public PermissionGroup()
        {
            PermissionCategories = [];
        }
        public string Name { get; set; }
        public ICollection<PermissionCategory> PermissionCategories { get; set; }
    }

    public class PermissionCategory
    {
        public PermissionCategory()
        {
            Permissions = [];
        }
        public string Name { get; set; }
        public ICollection<string> Permissions { get; set; }
    }
}
