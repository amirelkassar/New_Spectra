using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.Assessments.MDTAssessmentData
{
    public class CognitiveSkill
    {
        public SkillLevel AwareOfRisk { get; set; }
        public SkillLevel AttentionSpan { get; set; }
        public SkillLevel WorkingMemory { get; set; }
        public SkillLevel LongTermMemory { get; set; }
    }
}
