using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Employees.MedicalStaff.MedicalTeams.NewFolder
{
    public class SpecialistDto
    {
        public string Name { get; set; }
        public List<string> Diagnoses { get; set; }
        public double Rate { get; set; }
    }
}
