using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.Assessments.PsychologicalInitialAssessmentData
{
    public class FamilySupport
    {
        public Rating SocialSupport { get; set; }
        public CarerStatus CarerStatus { get; set; }
        public CarerCharacteristic CarerCharacteristic { get; set; }
    }
}
