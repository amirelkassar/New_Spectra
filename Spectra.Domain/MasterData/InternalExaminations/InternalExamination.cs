using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;

namespace Spectra.Domain.MasterData.InternalExaminations
{
    public class InternalExamination : BaseAuditableEntity<string>
    {
        public string Name { get; set; }

        public string Code { get; set; }
        public MentalillnessAndTreatment ExaminationTypes { get; set; }



        protected InternalExamination() { }
        private InternalExamination(
               string id,
           string name,
           string code,
           MentalillnessAndTreatment examinationType
               ) : base(id)
        {
            Id = id;
            Name = name;
            Code = code;
            ExaminationTypes = examinationType;
        }
        public static InternalExamination Create(string id, string name,
           string code, MentalillnessAndTreatment examinationType
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
