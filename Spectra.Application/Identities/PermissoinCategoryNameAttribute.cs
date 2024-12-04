using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Identities
{
    [AttributeUsage(AttributeTargets.Property|AttributeTargets.Field)]
    public class PermissoinCategoryNameAttribute(string enName, string arName,string logicalName) : Attribute
    {
        public string EnName { get; } = enName;
        public string ArName { get; } = arName;
        public string LogicalName { get; } = logicalName;
    }
}
