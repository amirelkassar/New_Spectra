using Spectra.Domain.Shared.Common;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.PatientsData
{
    public class BirthHistory : BaseAuditableEntity<string>
    {
        public int TermOfPregnancy { get; set; }
        public TypeOfDelivery DeliveryType { get; set; }
        public bool CriedImmediately { get; set; }
        public bool WasAdmittedToNICU { get; set; }
        public bool NeededVentilation { get; set; }
        public bool IsNormalBirthWeight { get; set; }
        public double BirthWeight { get; set; }
    }
}
