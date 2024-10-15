using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Patients.PatientsData
{
    public class BehavioralDifficulty : BaseAuditableEntity<string>
    {
        public string Tantrums { get; set; } 
        public string Disruptive { get; set; } 
        public string Aggressiveness { get; set; } 
        public string SelfInjury { get; set; } 
    }
}
