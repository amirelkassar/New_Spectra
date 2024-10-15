using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.PatientsData
{
    public class PreCommunicationSkill : BaseAuditableEntity<string>
    {
        public Rating CooperationRating { get; set; }
        public string CooperationComment { get; set; }
        public Rating AttentionRating { get; set; }
        public string AttentionComment { get; set; }
        public Rating EyeContactRating { get; set; }
        public string EyeContactComment { get; set; }
        public Rating ImitationVerbalRating { get; set; }
        public string ImitationVerbalComment { get; set; }
        public Rating ImitationNonverbalRating { get; set; }
        public string ImitationNonverbalComment { get; set; }
        public Rating PlayingSkillsSymbolicRating { get; set; }
        public string PlayingSkillsSymbolicComment { get; set; }
        public Rating PlayingSkillsImaginativeRating { get; set; }
        public string PlayingSkillsImaginativeComment { get; set; }
        public Rating JointAttentionInitiationRating { get; set; }
        public string JointAttentionInitiationComment { get; set; }
        public Rating JointAttentionRespondingRating { get; set; }
        public string JointAttentionRespondingComment { get; set; }
        public Rating SocialInteractionRating { get; set; }
        public string SocialInteractionComment { get; set; }
        public string AdditionalNotes { get; set; }
    }
}
