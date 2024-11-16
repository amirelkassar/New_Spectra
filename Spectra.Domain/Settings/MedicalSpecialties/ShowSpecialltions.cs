using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;

namespace Spectra.Domain.Settings.MedicalSpecialties
{
    public class ShowSpecialltions : BaseAuditableEntity<string>
    {

        public List<MedicalSpecialt> Specialization { get; set; }
        protected ShowSpecialltions() { }
        private ShowSpecialltions(
        string id,

        List<MedicalSpecialt> specialization
               ) : base(id)
        {
            Id = id;
            Specialization = specialization;

        }
        public static ShowSpecialltions Create(string id,
         List<MedicalSpecialt> specialization

       )
        {
            ArgumentNullException.ThrowIfNull(specialization, nameof(specialization));


            return new ShowSpecialltions(id,
                specialization

              );

        }
    }
}
