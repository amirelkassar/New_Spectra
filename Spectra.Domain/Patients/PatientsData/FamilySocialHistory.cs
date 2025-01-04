using Spectra.Domain.Shared.Common;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.PatientsData
{
    public class FamilySocialHistory : BaseAuditableEntity<string>
    {
        public bool Consanguinity { get; set; }
        public ParentOccupation ParentOccupation { get; set; }
        public bool FamilyHistoryOfChronicIllness { get; set; }
        public bool HouseMade { get; set; }
        public ParentOccupation SocioeconomicStatus { get; set; }
    }
}
