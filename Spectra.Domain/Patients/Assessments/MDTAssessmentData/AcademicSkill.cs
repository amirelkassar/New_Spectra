using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.Assessments.MDTAssessmentData
{
    public class AcademicSkill
    {
        public AcademicSkillType ReadingSkill { get; set; }
        public AcademicSkillType WritingSkill { get; set; }
        public bool MathematicsAddition { get; set; }
        public bool MathematicsSubtraction { get; set; }
        public string Other { get; set; }
    }
}
