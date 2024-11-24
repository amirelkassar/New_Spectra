using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;

namespace Spectra.Domain.MasterData.Sections
{
    public class Section : BaseAuditableEntity<string>
    {
        public string Name { get; set; }
        public ICollection<SectionSpecsification> Specsifications { get; set; }
        public string HeadDoctorId { get; set; }
        public string HeadDoctorName { get; set; }

        protected Section() { }
        private Section(string id,
       string name
      , string headId,
       string headName,
        List<SectionSpecsification> specsifications) : base(id)
        {
            Id = id;
            Name = name;
            HeadDoctorId = headId;
            HeadDoctorName = headName;
            Specsifications = specsifications;
        }
        public static Section Create(string id,
       string name
      , string headId,
       string headName,
        List<SectionSpecsification> specsifications)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(name, nameof(name));
            ArgumentNullException.ThrowIfNull(headId, nameof(headId));
            ArgumentNullException.ThrowIfNull(headName, nameof(headName));
            ArgumentNullException.ThrowIfNull(specsifications, nameof(specsifications));
            return new Section(id, name, headId, headName, specsifications);
        }

    }

}
