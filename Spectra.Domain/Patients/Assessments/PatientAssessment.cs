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
    public abstract class PatientAssessment : BaseAuditableEntity<string>
    {
        protected PatientAssessment(string id,
            string patientId,
            string clientId,
            Name patientName,
            AssessmentTypes type)
        {
            Id = id;
            PatientId = patientId;
            ClientId = clientId;
            PatientName = patientName;
            Type = type;
        }
        public string PatientId { get; protected set; }
        public string ClientId { get; protected set; }
        public Name PatientName { get; protected set; }
        public AssessmentTypes Type { get; protected set; }

        public string Notes { get; set; }
        public string Impression { get; set; }
        public RecommendationsAndGoal RecommendationsAndGoals { get; set; }

    }

    public class RecommendationsAndGoal
    {
        public bool CognitiveRehabilitationTraining { get; set; }
        public bool CognitiveBehavioralTherapyCBT { get; set; }
        public bool PatientFamilyEducation { get; set; }
        public bool BehavioralModificationIntervention { get; set; }
        public bool RecreationalTherapy { get; set; }
        public bool CopingSkillsTraining { get; set; }
        public bool ProblemSolvingTraining { get; set; }
        public bool FamilyCounseling { get; set; }
        public int ReassessmentInMonths { get; set; }
        public string Other { get; set; }
    }
}
