using Spectra.Domain.Common.Conses;
using Spectra.Domain.Patients.Assessments.PsychologicalInitialAssessmentData;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.Assessments
{
    public class PsychologicalInitialAssessment(string id, string patientId, string clientId, Name patientName) : PatientAssessment(id, patientId, clientId, patientName, AssessmentTypes.PsychologicalInitial)
    {
        public ReferralReason ReferralReason { get; set; }
        public InterpersonalDynamic InterpersonalDynamic { get; set; }
        public FamilyImpact FamilyImpact { get; set; }
        public FamilySupport FamilySupport { get; set; }
        public PatientPreviousHistory PatientPreviousHistory { get; set; }
        public bool HasHistoryLearningDifficulties { get; set; }
        public PlayCharacteristic PlayCharacteristic { get; set; }
        public SocialBehavior SocialBehavior { get; set; }
        public SpeechAndLanguage SpeechAndLanguage { get; set; }
        public AffectAndMood AffectAndMood { get; set; }
        public Cognition Cognition { get; set; }
        public Thought Thought { get; set; }
        public RiskLevel RiskLevel { get; set; }
    }
}
