using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.Assessments.MDTAssessmentData
{
    public class SocialAndPlaySkill
    {
        public SkillLevel EstablishingEyeContact { get; set; }
        public SkillLevel PlayingWithToysInAppropriateWay { get; set; }
        public SkillLevel EngagingWithTherapistDuringPlaying { get; set; }
        public SkillLevel ImitatingTherapistActions { get; set; }
        public SkillLevel PlayingImaginatively { get; set; }
    }
}
