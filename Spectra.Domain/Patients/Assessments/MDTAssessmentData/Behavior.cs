using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.Assessments.MDTAssessmentData
{
    public class Behavior
    {
        public bool Shy { get; set; }
        public bool Rocking { get; set; }
        public bool Staring { get; set; }
        public bool Anxiety { get; set; }
        public bool SocialIsolation { get; set; }
        public bool HandFlapping { get; set; }
        public string OtherWithdrawn { get; set; }

        public bool Tantrums { get; set; }
        public bool Screaming { get; set; }
        public bool RefusingToFollowInstructions { get; set; }
        public bool ThrowingObjects { get; set; }
        public string OtherDisruptive { get; set; }

        public bool HeadBanging { get; set; }
        public bool Kicking { get; set; }
        public bool Biting { get; set; }
        public bool Punching { get; set; }
        public bool Fighting { get; set; }
        public bool RunningAway { get; set; }
        public bool SmashingEquipmentOrFurniture { get; set; }
        public bool SelfHarm { get; set; }
        public string OtherViolentAndUnsafe { get; set; }

        public bool FollowCommands { get; set; }
        public SittingTolerance SittingTolerance { get; set; }
    }
}
