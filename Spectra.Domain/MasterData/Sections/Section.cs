using System;
using System.Collections.Generic;
using Spectra.Domain.Shared.Common;

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
       string arName) : base(id)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(enName, nameof(enName));
            ArgumentNullException.ThrowIfNull(arName, nameof(arName));
            EnName = enName;
            ArName = arName;
            Specsifications = [];
        }
        public static Section Create(string id,
       string enName,
       string arName)
        {
            return new Section(id, enName, arName);
        }

    }

}
