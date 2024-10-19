using Spectra.Domain.Shared.Common;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.PatientsData
{
    public class NonVerbalCommunication : BaseAuditableEntity<string>
    {
        public Rating FacialExpressionsRating { get; set; }
        public string FacialExpressionsComment { get; set; }
        public Rating PointingRating { get; set; }
        public string PointingComment { get; set; }
        public Rating GesturesRating { get; set; }
        public string GesturesComment { get; set; }
        public Rating AACRating { get; set; }
        public string AACComment { get; set; }
        public string AdditionalNotes { get; set; }
    }
}
