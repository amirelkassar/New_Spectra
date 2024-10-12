
using Spectra.Domain.Patients;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;


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
        public List<Patient>? Patients { get; set; }
        public List<ServicePackage>? ServicePackages { get; set; }

        //public EarlyDetection EarlyDetection { get; set; }
        protected Client() { }

        private Client(
            string id,
            Name name,
            string nationalId,
            PhoneNumber phoneNumber,
            ClientTypes clientTypes,
            string userId,
            EmailAddress emailAddress,
            Address address,
            List<Patient>? patients,
            Organization? organization = null,
            MedicalServiceProvider? medicalServiceProvider = null
            ,
            List<ServicePackage>? servicePackages = null
            ) : base(id)
        {
            Id = id;
            Name = name;
            NationalId = nationalId;
            PhoneNumber = phoneNumber;
            ClientType = clientTypes;
            UserId = userId;
            EmailAddress = emailAddress;
            Address = address;
            Patients = patients;
            Organization = organization;
            MedicalServiceProvider = medicalServiceProvider;
            ServicePackages = servicePackages;
        }

        public static Client Create(
            string id,
            Name name,
            string nationalId,
            PhoneNumber phoneNumber,
            ClientTypes clientTypes,
            string userId,
            EmailAddress emailAddress,
            Address address,
            List<Patient>? patients,
            Organization organization,
            MedicalServiceProvider? medicalServiceProvider,
            List<ServicePackage>? ServicePackages
            )
        {
            ArgumentNullException.ThrowIfNull(id, nameof(Id));
            ArgumentNullException.ThrowIfNull(name, nameof(name));
            ArgumentNullException.ThrowIfNull(nationalId, nameof(nationalId));
            ArgumentNullException.ThrowIfNull(phoneNumber, nameof(phoneNumber));
            ArgumentNullException.ThrowIfNull(userId, nameof(userId));
            ArgumentNullException.ThrowIfNull(emailAddress, nameof(emailAddress));
            ArgumentNullException.ThrowIfNull(address, nameof(address));

            var client = new Client(id, name, nationalId, phoneNumber, clientTypes, userId,
                emailAddress, address, patients, organization, medicalServiceProvider , ServicePackages);
            var clientCreatedEvent = new ClientCreatedEvent(client);
            client.AddDomainEvent(clientCreatedEvent);
            return client;


        }
    }
}
