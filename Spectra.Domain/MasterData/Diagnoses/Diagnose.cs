
using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.MasterData.Diagnoses
{
    public class Diagnose : BaseAuditableEntity<string>
    {
        public string Code1 { get; set; }
        public string Code2 { get; set; }
        public string Code3 { get; set; }
        public string DiagnosisName { get; set; }

        public string DiagnosisDescription { get; set; }



        protected Diagnose() { }
        private Diagnose(
               string id,
               string code1,
               string code2,
               string code3,
           string diagnosisName,
           string diagnosisDescription
               ) : base(id)
        {
            Id = id;
            Code1 = code1;
            Code2 = code2;
            Code3 = code3;
            DiagnosisName = diagnosisName;
            DiagnosisDescription = diagnosisDescription;
        }
        public static Diagnose Create(string id, string code1,
               string code2,
               string code3 , string diagnosisName,
           string diagnosisDescription
       )
        {

            ArgumentNullException.ThrowIfNull(id, nameof(id));

            ArgumentNullException.ThrowIfNull(diagnosisName, nameof(diagnosisName));

            ArgumentNullException.ThrowIfNull(diagnosisDescription, nameof(diagnosisDescription));
            ArgumentNullException.ThrowIfNull(code1, nameof(code1));
            ArgumentNullException.ThrowIfNull(code2, nameof(code2));
            ArgumentNullException.ThrowIfNull(code3, nameof(code3));

            return new Diagnose(id, code1, code2, code3, diagnosisName, diagnosisDescription);
             
        }
    }
}
