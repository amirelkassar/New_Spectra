using System.Collections.Generic;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.Assessments.PsychologicalInitialAssessmentData
{
    public class Thought
    {
        public ICollection<ThoughtsProcessLevel> ProcessLevels { get; set; }
        public InsightAndJudgmentLevel Insight { get; set; }
        public InsightAndJudgmentLevel Judgment { get; set; }
        public string Other { get; set; }
    }
}
