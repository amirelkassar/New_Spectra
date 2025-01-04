using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.Assessments.PsychologicalInitialAssessmentData
{
    public class AffectAndMood
    {
        public AffectLevel Affect { get; set; }
        public MoodLevel Mood { get; set; }
        public string OtherAffect { get; set; }
        public string OtherMood { get; set; }
    }
}
