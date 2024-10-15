using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
