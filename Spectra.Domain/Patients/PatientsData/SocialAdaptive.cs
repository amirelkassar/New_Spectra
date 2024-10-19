using Spectra.Domain.Shared.Common;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.PatientsData
{
    public class SocialAdaptive : BaseAuditableEntity<string>
    {
        public DevelopmentStatus ToiletTrained { get; set; }
        public DevelopmentStatus Dressing { get; set; }
        public DevelopmentStatus Feeding { get; set; }
        public DevelopmentStatus Sleeping { get; set; }
    }
}
