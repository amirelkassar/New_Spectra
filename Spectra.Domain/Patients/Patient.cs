using Spectra.Domain.Enumeration;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;


namespace Spectra.Domain.Patients
{
    public class Patient : BaseAuditableEntity<string>
	{
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public HumenGender Gender { get; set; }
        public DateOnly DateOfBirth { get; set; }
        public ClientPatientRelations RelationToClient { get; set; }
        public string ClientId { get; set; }

        private Patient(Name name , 
			string nationalId ,
			HumenGender gender , 
            DateOnly dateOfBirth , 
			ClientPatientRelations relationToClient,
			string clientId)
        {
            Name = name;
            NationalId = nationalId;
            Gender = gender;
            DateOfBirth = dateOfBirth;
            RelationToClient = relationToClient;
			ClientId=clientId;
        }
        protected Patient() { }

        public static Patient Create(Name name, 
			string nationalId, 
			HumenGender gender,
			DateOnly dateOfBirth, 
			ClientPatientRelations relationToClient,
			string clientId)
        {
			ArgumentNullException.ThrowIfNull(name, nameof(name));
            ArgumentNullException.ThrowIfNull(nationalId, nameof(nationalId));
            ArgumentNullException.ThrowIfNull(gender, nameof(gender));
            ArgumentNullException.ThrowIfNull(dateOfBirth, nameof(dateOfBirth));
            ArgumentNullException.ThrowIfNull(relationToClient, nameof(relationToClient));
            ArgumentNullException.ThrowIfNull(clientId, nameof(clientId));

			return new Patient(name, nationalId, gender, dateOfBirth, relationToClient,clientId);
		}
    }
}
