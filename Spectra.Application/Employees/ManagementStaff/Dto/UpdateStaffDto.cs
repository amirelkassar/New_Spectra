using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Employees.ManagementStaff.Dto
{
    public class UpdateStaffDto : EmployeeBaseDto
    {
        public string Id { get; set; }
        public double? WorkingHours { get; set; }
    }
}
