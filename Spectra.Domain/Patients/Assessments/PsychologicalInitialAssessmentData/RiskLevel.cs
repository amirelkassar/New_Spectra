using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.Assessments.PsychologicalInitialAssessmentData
{
    public class RiskLevel
    {
        public RiskLevels RiskOfUnsafeDecision { get; set; }
        public RiskLevels RiskOfViolentBehavior { get; set; }
    }
}
