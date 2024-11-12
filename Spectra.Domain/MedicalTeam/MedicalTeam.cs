using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;

namespace Spectra.Domain.MedicalTeam
{
    public class MedicalTeam : BaseAuditableEntity<string>
    {
        public string DoctorId { get; set; }
        public string DoctorName { get; set; }
        public List<string> SpecialistIds { get; set; }

        protected MedicalTeam() { }
        private MedicalTeam(
          string id,
          string doctorId,
          string doctorName,
          List<string> specialistIds
            ) : base(id)
        {

            Id = id;
            DoctorId = doctorId;
            SpecialistIds = specialistIds;
            DoctorName = doctorName;

        }
        public static MedicalTeam Create(string id, string doctorId, List<string> specialistIds, string doctorName
       )
        {

            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(doctorId, nameof(doctorId));
            ArgumentNullException.ThrowIfNull(specialistIds, nameof(specialistIds));
            ArgumentNullException.ThrowIfNull(doctorName, nameof(doctorName));

            return new MedicalTeam(id, doctorId, doctorName, specialistIds);

        }

    }
}
