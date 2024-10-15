using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.PatientsData
{
    public class VerbalCommunication : BaseAuditableEntity<string>
    {
        public Rating RecognizingNameRating { get; set; }
        public string RecognizingNameComment { get; set; }
        public Rating FollowingSimpleCommandsRating { get; set; }
        public string FollowingSimpleCommandsComment { get; set; }
        public Rating FollowingComplexCommandsRating { get; set; }
        public string FollowingComplexCommandsComment { get; set; }
        public Rating PhonologyAwarenessRating { get; set; }
        public string PhonologyAwarenessComment { get; set; }
        public Rating FamilyMembersRating { get; set; }
        public string FamilyMembersComment { get; set; }
        public Rating PhonologyProcessRating { get; set; }
        public string PhonologyProcessComment { get; set; }
        public Rating NounsRating { get; set; }
        public string NounsComment { get; set; }
        public Rating VerbsRating { get; set; }
        public string VerbsComment { get; set; }
        public Rating AdjectivesRating { get; set; }
        public string AdjectivesComment { get; set; }
        public Rating PrepositionsRating { get; set; }
        public string PrepositionsComment { get; set; }
        public Rating PronounsRating { get; set; }
        public string PronounsComment { get; set; }
        public Rating UnderstandingYesNoQuestionsRating { get; set; }
        public string UnderstandingYesNoQuestionsComment { get; set; }
        public Rating UnderstandingWhQuestionsRating { get; set; }
        public string UnderstandingWhQuestionsComment { get; set; }
        public Rating EngagingInSimpleConversationsRating { get; set; }
        public string EngagingInSimpleConversationsComment { get; set; }

        public string AdditionalNotes { get; set; }
    }
}
