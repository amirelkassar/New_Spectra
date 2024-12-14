using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.AppRoles.Permissions.Dtos
{
    public class PermissoinGroupUpdateDto
    {
        public string Id { get; set; }
        public string LogicalName { get; set; }
        public ICollection<PermissoinCategoryUpdateDto> Categories { get; set; }
    }

    public class PermissoinCategoryUpdateDto
    {
        public string Id { get; set; }
        public string LogicalName { get; set; }
        public ICollection<PermissoinUpdateDto> Permissoins { get; set; }
    }

    public class PermissoinUpdateDto
    {
        public string Id { get; set; }
        public string LogicalName { get; set; }
        public bool Grant { get; set; }
    }
}
