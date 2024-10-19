using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.Patients.PatientsData
{
    public class BirthHistory : BaseAuditableEntity<string>
    {
        public bool IsTerm { get; set; }
        public bool IsPreterm { get; set; }
        public bool IsNormalDelivery { get; set; }
        public bool IsCSDelivery { get; set; }
        public bool CriedImmediately { get; set; }
        public bool WasAdmittedToNICU { get; set; }
        public bool NeededVentilation { get; set; }
        public bool IsNormalBirthWeight { get; set; }
        public string BirthWeight { get; set; }
    }
}
