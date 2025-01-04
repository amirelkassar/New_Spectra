using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.Patients.PatientsData
{
    public class PatientMedicalHistory : BaseAuditableEntity<string>
    {
        public string HasSeizure { get; set; }
        public string HasSurgery { get; set; }
        public string HasAllergies { get; set; }
        public string IsOnMedication { get; set; }
        public string HasHearingTest { get; set; }
        public string HasNeuroimages { get; set; }
        public string HasEEG { get; set; }
        public string HasLabInvestigation { get; set; }
        public string HasGeneticResult { get; set; }
        public string HasChronicDisease { get; set; }
    }
}
