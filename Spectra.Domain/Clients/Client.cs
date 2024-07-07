using Spectra.Domain.Enumeration;
using Spectra.Domain.Patients;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Clients
{
    public class Client: BaseAuditableEntity<string>
	{
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public PhoneNumber PhoneNumber { get; set; }
        public PhoneNumber? MobileNumber { get; set; }
        public ClientTypes ClientType { get; set; }
        public string UserId { get; set; }
        public string? Position { get; set; }
        public PhoneNumber? LandLine { get; set; }
        public EmailAddress EmailAddress { get; set; }
        public Address Address { get; set; }
        public Organization? Organization { get; set; }
        public MedicalServiceProvider? MedicalServiceProvider { get; set; }
        public ICollection<Patient> Patients { get; set; }
        public ICollection<SubClient> Clients { get; set; }

        private Client(Name name , string nationalId , PhoneNumber phoneNumber , ClientTypes clientTypes , string userId , EmailAddress emailAddress , Address address)
        {
            Name = name;
            NationalId = nationalId;
            PhoneNumber = phoneNumber;
            ClientType = clientTypes;
            UserId = userId;
            EmailAddress = emailAddress;
            Address = address;
        }
        protected Client() { }

		public static Client Create(Name name,
			string nationalId,
			PhoneNumber phoneNumber, ClientTypes clientTypes, string userId, EmailAddress emailAddress, Address address)
        {
			if (name == null)
			{
				throw new ArgumentNullException(nameof(name), "Name is required.");
			}

			if (string.IsNullOrWhiteSpace(nationalId))
			{
				throw new ArgumentException("National ID is required.", nameof(nationalId));
			}

			if (phoneNumber == null)
			{
				throw new ArgumentNullException(nameof(phoneNumber), "Phone number is required.");
			}

			if (string.IsNullOrWhiteSpace(userId))
			{
				throw new ArgumentException("User ID is required.", nameof(userId));
			}

			if (emailAddress == null)
			{
				throw new ArgumentNullException(nameof(emailAddress), "Email address is required.");
			}

			if (address == null)
			{
				throw new ArgumentNullException(nameof(address), "Address is required.");
			}

			return new Client(name, nationalId, phoneNumber, clientTypes, userId, emailAddress, address);
		}




	}
}
