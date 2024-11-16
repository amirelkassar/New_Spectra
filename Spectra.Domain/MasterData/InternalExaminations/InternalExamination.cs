using Spectra.Domain.MasterData.Diagnoses;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.MasterData.InternalExaminations
{
    public class InternalExamination : BaseAuditableEntity<string>
    {
        public string Name { get; set; }

        public string Code { get; set; }
        public List<string> ExaminationTypes { get; set; }



        protected InternalExamination() { }
        private InternalExamination(
               string id,
           string name,
           string code,
           List<string> examinationType
               ) : base(id)
        {
            Id = id;
            Name = name;
            Code = code;
            ExaminationTypes = examinationType;
        }
        public static InternalExamination Create(string id, string name,
           string code, List<string> examinationType
       )
        {

            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(name, nameof(name));
            ArgumentNullException.ThrowIfNull(code, nameof(code));
            ArgumentNullException.ThrowIfNull(examinationType, nameof(examinationType));

            return new InternalExamination(id, name, code, examinationType);

        }
    }
}
