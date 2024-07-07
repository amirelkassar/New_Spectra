using Spectra.Domain.Clients;
using Spectra.Domain.Enumeration;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Patients
{
    public class Patient : BaseAuditableEntity<string>
	{
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public HumenGender Gender { get; set; }
        public DateOnly DateOfBirth { get; set; }
        public ClientPatientRelations RelationToClient { get; set; }
        public Client Client { get; set; }

        private Patient(Name name , string nationalId , HumenGender gender , 
            DateOnly dateOfBirth , ClientPatientRelations relationToClient)
        {
            Name = name;
            NationalId = nationalId;
            Gender = gender;
            DateOfBirth = dateOfBirth;
            RelationToClient = relationToClient;
        }
        protected Patient() { }

        public static Patient Create(Name name, string nationalId, HumenGender gender,
			DateOnly dateOfBirth, ClientPatientRelations relationToClient)
        {
			if (name == null)
			{
				throw new ArgumentNullException(nameof(name), "Name is required.");
			}

			if (string.IsNullOrWhiteSpace(nationalId))
			{
				throw new ArgumentException("National ID is required.", nameof(nationalId));
			}

			if (!Enum.IsDefined(typeof(HumenGender), gender))
			{
				throw new ArgumentException("Invalid gender.", nameof(gender));
			}

			if (dateOfBirth == default)
			{
				throw new ArgumentException("Date of birth is required.", nameof(dateOfBirth));
			}

			if (!Enum.IsDefined(typeof(ClientPatientRelations), relationToClient))
			{
				throw new ArgumentException("Invalid relation to client.", nameof(relationToClient));
			}

			return new Patient(name, nationalId, gender, dateOfBirth, relationToClient);
		}
    }
}
