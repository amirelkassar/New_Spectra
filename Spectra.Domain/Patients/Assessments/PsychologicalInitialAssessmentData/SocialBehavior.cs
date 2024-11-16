using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.Assessments.PsychologicalInitialAssessmentData
{
    public class SocialBehavior
    {
        public Rating Appropriateness { get; set; }
        public EyeContactLevel EyeContact { get; set; }
        public ICollection<SocialBehaviorAttitude> Attitudes { get; set; }
        public string Other { get; set; }
    }
}
