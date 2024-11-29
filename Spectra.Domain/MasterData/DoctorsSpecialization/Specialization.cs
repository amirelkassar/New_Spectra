using Spectra.Domain.Shared.Common;
using System;

namespace Spectra.Domain.MasterData.DoctorsSpecialization
{
    public class Specialization : BaseAuditableEntity<string>
    {
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string? EnDescription { get; set; }
        public string? ArDescription { get; set; }
        public string? Code { get; set; }
        public int? DoctorCount { get; set; }
        public double? ConsultationCost { get; set; }

        protected Specialization() { }
        private Specialization(string id, string enName, string arname) : base(id)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(Id));
            ArgumentNullException.ThrowIfNull(enName, nameof(enName));
            ArgumentNullException.ThrowIfNull(arname, nameof(arname));

            Id = id;
            EnName = enName;
            ArName = arname;
        }

        public static Specialization Create(string id, string enName, string arname)
        {
            return new Specialization(id, enName, arname);
        }

    }




}
