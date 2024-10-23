using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.PatientsData
{
    public class ExpressiveLanguageSkill
    {
        public Rating PhonologyProcessRating { get; set; }
        public string PhonologyProcessComment { get; set; }
        public Rating FamilyMembersRating { get; set; }
        public string FamilyMembersComment { get; set; }
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
    }
}
