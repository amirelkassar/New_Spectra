using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.Assessments.MDTAssessmentData
{
    public class Communication
    {
        public VerbalLevel Verbal { get; set; }
        public string VerbalOther { get; set; }
        public NonVerbalLevel NonVerbal { get; set; }
        public string NonVerbalOther { get; set; }
    }
}
