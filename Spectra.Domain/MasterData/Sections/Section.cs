using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;

namespace Spectra.Domain.MasterData.Sections
{
    public class Section : BaseAuditableEntity<string>
    {
     

        public string Name { get; set; }
        public List<string> SpecializationIds { get; set; }
        public string DoctorId {  get; set; }
        public string DoctorName { get; set; }




        protected Section() { }
        private Section(
            string id,
       string name
      , string doctorId,
       string doctorName,
        List<string> specializationIds
               ) : base(id)
        {
            Id = id;
            Name = name;
            DoctorId = doctorId;
            DoctorName = doctorName;
            SpecializationIds = specializationIds;
        }
        public static Section Create(string id, string name,
           string doctorId, string doctorName, List<string> specializationIds
       )
        {

            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(name, nameof(name));

            ArgumentNullException.ThrowIfNull(doctorId, nameof(doctorId));
            ArgumentNullException.ThrowIfNull(doctorName, nameof(doctorName));
            ArgumentNullException.ThrowIfNull(specializationIds, nameof(specializationIds));

            return new Section(id, name, doctorId, doctorName, specializationIds);

        }

    }

}
