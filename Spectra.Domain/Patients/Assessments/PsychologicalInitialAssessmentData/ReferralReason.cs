using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Patients.Assessments.PsychologicalInitialAssessmentData
{
    public class ReferralReason
    {
        public bool DiagnosticPsychometries { get; set; }
        public bool GeneralPsychologicalEvaluation { get; set; }
        public bool CognitiveEvaluation { get; set; }
        public bool MoodBehaviorEvaluation { get; set; }
        public bool PatientFamilyEducationCounselingSupport { get; set; }
        public bool PsychologicalEvaluationInterventionForMentalHealthProblem { get; set; }
        public string Other { get; set; }
    }
}
