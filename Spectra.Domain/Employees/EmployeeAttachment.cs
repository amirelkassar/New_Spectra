using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Spectra.Domain.Shared.Constants.DocumentsConts;

namespace Spectra.Domain.Employees
{
    public class EmployeeAttachment
    {
        public string Name { get; set; }
        public string Path { get; set; }
        public FileTypes Type { get; set; }
    }
}
