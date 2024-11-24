using Spectra.Domain.Shared.Common;
using System;

namespace Spectra.Domain.MasterData.DoctorsSpecialization
{
    public class Specialization : BaseAuditableEntity<string>
    {
        public string Name { get; set; }
        public string? Description { get; set; }
        public string? Code { get; set; }
        public int? DoctorCount { get; set; }
        public double? ConsultationCost { get; set; }

        protected Specialization() { }
        private Specialization(string id, string specializationName) : base(id)
        {
            Id = id;
            Name = specializationName;
        }

        public static Specialization Create(string id, string specializationName)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(Id));
            ArgumentNullException.ThrowIfNull(specializationName, nameof(specializationName));
            return new Specialization(id, specializationName);
        }

    }




}
