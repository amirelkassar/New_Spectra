using Spectra.Domain.Enumeration;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.ValueObjects;
using System;

namespace Spectra.Domain.Clients
{
    public class Client : BaseAuditableEntity<string>
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
        protected Client() { }

        private Client(Name name,
            string nationalId,
            PhoneNumber phoneNumber,
            ClientTypes clientTypes,
            string userId,
            EmailAddress emailAddress,
            Address address)
        {
            Name = name;
            NationalId = nationalId;
            PhoneNumber = phoneNumber;
            ClientType = clientTypes;
            UserId = userId;
            EmailAddress = emailAddress;
            Address = address;
        }

        public static Client Create(Name name,
            string nationalId,
            PhoneNumber phoneNumber, 
            ClientTypes clientTypes, 
            string userId,
            EmailAddress emailAddress,
            Address address)
        {
            ArgumentNullException.ThrowIfNull(name,nameof(name));
            ArgumentNullException.ThrowIfNull(nationalId,nameof(nationalId));
            ArgumentNullException.ThrowIfNull(phoneNumber, nameof(phoneNumber));
            ArgumentNullException.ThrowIfNull(emailAddress, nameof(emailAddress));
            ArgumentNullException.ThrowIfNull(address, nameof(address));

            return new Client(name, nationalId, phoneNumber, clientTypes, userId, emailAddress, address);
        }
    }
}
