using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.AppRole
{
    public class Permission : BaseEntity<string>
    {
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string LogicalName { get; set; }
        public string PermissoinCategoryId { get; set; }
    }
}
