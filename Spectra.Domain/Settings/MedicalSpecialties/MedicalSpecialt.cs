using Spectra.Domain.MasterData.DoctorsSpecialization;
using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;

namespace Spectra.Domain.Settings.MedicalSpecialties
{
    public class MedicalSpecialt : BaseAuditableEntity<string>
    {
        public string SpecializationId { get; set; }
        public List<string> DorctorsIds { get; set; }
        protected MedicalSpecialt() { }
        private MedicalSpecialt(
        string id,
       string specialization,
        List<string> dorctorsIds
               ) : base(id)
        {
            Id = id;
            SpecializationId = specialization;
            DorctorsIds = dorctorsIds;
        }
        public static MedicalSpecialt Create(string id,
         string specialization,
        List<string> dorctorsIds
       )
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(specialization, nameof(specialization));


            return new MedicalSpecialt(id,
                specialization,
                dorctorsIds
              );

        }

    }
}
