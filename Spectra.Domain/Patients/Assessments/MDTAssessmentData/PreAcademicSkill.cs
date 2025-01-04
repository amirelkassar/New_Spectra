using System.Collections.Generic;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.Assessments.MDTAssessmentData
{
    public class PreAcademicSkill
    {
        public ICollection<BodyParts> BodyParts { get; set; }
        public bool Matching { get; set; }
        public bool Sorting { get; set; }
        public ICollection<BasicColors> RecognizingColors { get; set; }
        public ICollection<BasicShapes> RecognizingShapes { get; set; }
        public bool Counting { get; set; }
        public bool Quantity { get; set; }
        public ICollection<PenHoldingGrasp> PenHoldingGrasps { get; set; }
        public ICollection<BasicShapes> DrawingShapes { get; set; }

    }
}
