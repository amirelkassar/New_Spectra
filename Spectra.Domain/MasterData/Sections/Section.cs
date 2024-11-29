using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;

namespace Spectra.Domain.MasterData.Sections
{
    public class Section : BaseAuditableEntity<string>
    {
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string HeadDoctorId { get; set; }
        public string HeadDoctorName { get; set; }
        public ICollection<SectionSpecsification> Specsifications { get; set; }

        protected Section() { }
        private Section(string id,
       string enName,
       string arName,
       string headId,
       string headName,
        ICollection<SectionSpecsification> specsifications) : base(id)
        {
            Id = id;
            EnName = enName;
            ArName = arName;
            HeadDoctorId = headId;
            HeadDoctorName = headName;
            Specsifications = specsifications;
        }
        public static Section Create(string id,
       string enName,
       string arName,
       string headId,
       string headName,
        ICollection<SectionSpecsification> specsifications)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(enName, nameof(enName));
            ArgumentNullException.ThrowIfNull(arName, nameof(arName));
            ArgumentNullException.ThrowIfNull(headId, nameof(headId));
            ArgumentNullException.ThrowIfNull(headName, nameof(headName));
            ArgumentNullException.ThrowIfNull(specsifications, nameof(specsifications));
            return new Section(id, enName, arName, headId, headName, specsifications);
        }

    }

}
