using Spectra.Domain.Patients.Assessments.MDTAssessmentData;
using Spectra.Domain.ValueObjects;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.Assessments
{
    public class MDTAssessment(string id, string patientId, string clientId, string sessionId, Name patientName) : PatientAssessmentBase(id, patientId, clientId, sessionId, patientName, AssessmentTypes.MDT)
    {
        public SchoolCenterSituation SchoolCenterSituation { get; set; }
        public Communication Communication { get; set; }
        public Behavior Behavior { get; set; }
        public SocialAndPlaySkill SocialAndPlaySkill { get; set; }
        public CognitiveSkill CognitiveSkill { get; set; }
        public AttentionType AttentionType { get; set; }
        public ADLSkill ADLSkill { get; set; }
        public Sensory Sensory { get; set; }
        public GrossMotorSkill GrossMotorSkill { get; set; }
        public PreAcademicSkill PreAcademicSkill { get; set; }
        public AcademicSkill AcademicSkill { get; set; }
    }
}
