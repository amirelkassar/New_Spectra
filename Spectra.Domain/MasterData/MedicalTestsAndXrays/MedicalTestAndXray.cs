
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;

namespace Spectra.Domain.MasterData.MedicalTestsAndXrays
{
    public class MedicalTestAndXray : BaseAuditableEntity<string>
    {
        public string Name { get; set; }
        public string? Code { get; set; }
        public ExaminationType ExaminationTypes { get; set; }

        protected MedicalTestAndXray() { }
        private MedicalTestAndXray(string id,
               string name,
           ExaminationType examinationType) : base(id)
        {
            Name = name;
            ExaminationTypes = examinationType;
        }
        public static MedicalTestAndXray Create(string id,
               string name,
           ExaminationType examinationType)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(name, nameof(name));
            ArgumentNullException.ThrowIfNull(examinationType, nameof(examinationType));

            return new MedicalTestAndXray(id, name, examinationType);

        }

    }
}
