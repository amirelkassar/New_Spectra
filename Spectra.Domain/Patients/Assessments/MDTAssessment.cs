using Spectra.Domain.Patients.Assessments.MDTAssessmentData;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.Assessments
{
    public class MDTAssessment(string id, string patientId, string clientId, Name patientName) : PatientAssessment(id, patientId, clientId, patientName, AssessmentTypes.MDT)
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
