using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.PatientsData
{
    public class OralMotorExamination : BaseAuditableEntity<string>
    {
        public  Rating FacialSymmetryRating { get; set; }
        public string FacialSymmetryComment { get; set; }
        public Rating LipRating { get; set; }
        public string LipComment { get; set; }
        public Rating TongueRating { get; set; }
        public string TongueComment { get; set; }
        public Rating HardPalateRating { get; set; }
        public string HardPalateComment { get; set; }
        public Rating SoftPalateRating { get; set; }
        public string SoftPalateComment { get; set; }
        public Rating TeethRating { get; set; }
        public string TeethComment { get; set; }
        public string AdditionalNotes { get; set; }
    }
}
