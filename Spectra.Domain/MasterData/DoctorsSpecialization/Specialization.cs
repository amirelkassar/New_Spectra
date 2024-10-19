using Spectra.Domain.Shared.Common;
using System;

namespace Spectra.Domain.MasterData.DoctorsSpecialization
{
    public class Specialization : BaseAuditableEntity<string>
    {

        public string Name { get; set; }
        public string Description { get; set; }
        public string Code { get; set; }
        public int DoctorCount { get; set; }
        public double ConsultationCost { get; set; }

        protected Specialization() { }
        private Specialization(string id, string specializationName, int doctorCount, string code, string description, double consultationCost) : base(id)
        {
            Id = id;
            Name = specializationName;
            //Code = code;
            //DoctorCount= doctorCount;
            Description = description;
            ConsultationCost = consultationCost;
        }

        public static Specialization Create(string id, string specializationName, int doctorCount, string code, string description, double consultationCost)
        {


            ArgumentNullException.ThrowIfNull(id, nameof(Id));
            ArgumentNullException.ThrowIfNull(specializationName, nameof(specializationName));
            ArgumentNullException.ThrowIfNull(description, nameof(description));
            ArgumentNullException.ThrowIfNull(consultationCost, nameof(consultationCost));

            return new Specialization(id, specializationName, doctorCount, code, description, consultationCost);


        }

    }




}
