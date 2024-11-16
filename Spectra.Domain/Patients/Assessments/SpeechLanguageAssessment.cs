using Spectra.Domain.Patients.Assessments.SpeechLanguageAssessmentData;
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
    public class SpeechLanguageAssessment(string id, string patientId, string clientId,string sessionId, Name patientName) : PatientAssessmentBase(id, patientId, clientId, sessionId, patientName, AssessmentTypes.SpeechLanguage)
    {
        public OralMotorExamination? OralMotorExamination { get; set; }
        public PreCommunicationSkill? PreCommunicationSkill { get; set; }
        public NonVerbalCommunication? NonVerbalCommunication { get; set; }
        public ReceptiveLanguageSkill? ReceptiveLanguageSkill { get; set; }
        public ExpressiveLanguageSkill? ExpressiveLanguageSkill { get; set; }
        public int ArticulationIssuesScore { get; set; }
        public Severity ArticulationIssuesSeverity { get; set; }

        public int DevelopmentalLanguageDelayScore { get; set; }
        public Severity DevelopmentalLanguageDelaySeverity { get; set; }

        public int VocabularyScore { get; set; }
        public Severity VocabularySeverity { get; set; }

        public int StutteringScore { get; set; }
        public Severity StutteringSeverity { get; set; }

        public int PhonologicalIssuesScore { get; set; }
        public Severity PhonologicalIssuesSeverity { get; set; }

        public bool HasSomeAutisticFeatures { get; set; }
        public Severity HasSomeAutisticFeaturesSeverity { get; set; }

        public bool HasSocialPragmaticDisorders { get; set; }
        public Severity HasSocialPragmaticDisordersSeverity { get; set; }

        public string AdditionalNotes { get; set; }
    }
}
