using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Settings.MedicalSpecialties
{
    public class Specialties
    {
        public string Specialization {  get; set; }
        public List<string> DorctorsIds { get; set; }
    }
}
