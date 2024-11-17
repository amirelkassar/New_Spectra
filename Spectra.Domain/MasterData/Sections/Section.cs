using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;

namespace Spectra.Domain.MasterData.Sections
{
    public class Section : BaseAuditableEntity<string>
    {


        public string Name { get; set; }
        public List<string> Diagnoses { get; set; }
        public string DoctorId { get; set; }
        public string DoctorName { get; set; }




        protected Section() { }
        private Section(
            string id,
       string name
      , string doctorId,
       string doctorName,
        List<string> diagnoses
               ) : base(id)
        {
            Id = id;
            Name = name;
            DoctorId = doctorId;
            DoctorName = doctorName;
            Diagnoses = diagnoses;
        }
        public static Section Create(string id, string name,
           string doctorId, string doctorName, List<string> diagnoses
       )
        {

            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(name, nameof(name));

            ArgumentNullException.ThrowIfNull(doctorId, nameof(doctorId));
            ArgumentNullException.ThrowIfNull(doctorName, nameof(doctorName));
            ArgumentNullException.ThrowIfNull(diagnoses, nameof(diagnoses));

            return new Section(id, name, doctorId, doctorName, diagnoses);

        }

    }

}
