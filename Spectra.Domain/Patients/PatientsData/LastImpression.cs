using Spectra.Domain.Shared.Common;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.PatientsData
{
    public class LastImpression : BaseAuditableEntity<string>
    {
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
