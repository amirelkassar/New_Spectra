using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Employees.ManagementStaff.Dto
{
    public class CreateStaffDto : EmployeeBaseDto
    {
        public double? WorkingHours { get; set; }
        public string Passowrd { get; set; }
    }
}
