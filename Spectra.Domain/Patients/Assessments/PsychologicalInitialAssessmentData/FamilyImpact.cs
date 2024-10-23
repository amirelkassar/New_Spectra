using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.Assessments.PsychologicalInitialAssessmentData
{
    public class FamilyImpact
    {
        public ICollection<ImpactType> ParentImpacts { get; set; }
        public ICollection<ImpactType> SiblingsImpacts { get; set; }
        public ICollection<ImpactType> FriendsImpacts { get; set; }
        public ICollection<ImpactType> SchoolPeersImpacts { get; set; }
    }
}
