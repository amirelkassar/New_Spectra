using Spectra.Domain.MedicalStaff.Doctor;
using Spectra.Domain.MedicalStaff.Specialists;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Admin.Dto
{
    public class CollectAllEmployeeDto
    {
        public IEnumerable<GetAllEmployeesDto> Doctors {get; set;} 
        public IEnumerable<GetAllEmployeesDto> Specialists { get; set;} 
        
    }
}
