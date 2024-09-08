using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.MasterData.DoctorsSpecialization
{
    public class Specializations : BaseAuditableEntity<string>
    {

        public string SpecializationName { get; set; }
        public string Description { get; set; }
        public decimal ConsultationCost { get; set; }

        protected Specializations() { }
        private Specializations(string id, string specializationName, string description, decimal consultationCost) : base(id)
        {
            Id = id;
            SpecializationName = specializationName;
            Description = description;
            ConsultationCost = consultationCost;
        }

        public static Specializations Create(string id, string specializationName, string description, decimal consultationCost)
        {


            ArgumentNullException.ThrowIfNull(id, nameof(Id));
            ArgumentNullException.ThrowIfNull(specializationName, nameof(specializationName));
            ArgumentNullException.ThrowIfNull(description, nameof(description));
            ArgumentNullException.ThrowIfNull(consultationCost, nameof(consultationCost));

            return new Specializations(id, specializationName, description, consultationCost);


        }
    }




}
