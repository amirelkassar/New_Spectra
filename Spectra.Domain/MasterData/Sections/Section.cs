using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;

namespace Spectra.Domain.MasterData.Sections
{
    public class Section : BaseAuditableEntity<string>
    {
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string? HeadDoctorId { get; set; }
        public string? HeadDoctorName { get; set; }
        public ICollection<SectionSpecsification> Specsifications { get; set; }

        protected Section() { }
        private Section(string id,
       string enName,
       string arName,
        ICollection<SectionSpecsification> specsifications) : base(id)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(enName, nameof(enName));
            ArgumentNullException.ThrowIfNull(arName, nameof(arName));
            ArgumentNullException.ThrowIfNull(specsifications, nameof(specsifications));
            EnName = enName;
            ArName = arName;
            Specsifications = specsifications;
        }
        public static Section Create(string id,
       string enName,
       string arName,
        ICollection<SectionSpecsification> specsifications)
        {
            return new Section(id, enName, arName, specsifications);
        }

    }

}
