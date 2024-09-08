using MediatR;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;
using static System.Runtime.InteropServices.JavaScript.JSType;

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

        private Client(
            string id,
            Name name,
            string nationalId,
            PhoneNumber phoneNumber,
            ClientTypes clientTypes,
            string userId,
            EmailAddress emailAddress,
            Address address,
            Organization? organization = null,
            MedicalServiceProvider? medicalServiceProvider = null

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
            Organization = organization;
            MedicalServiceProvider = medicalServiceProvider;

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
            Organization organization,
             MedicalServiceProvider? medicalServiceProvider
            )
        {
            ArgumentNullException.ThrowIfNull(id, nameof(Id));
            ArgumentNullException.ThrowIfNull(name, nameof(name));
            ArgumentNullException.ThrowIfNull(nationalId, nameof(nationalId));
            ArgumentNullException.ThrowIfNull(phoneNumber, nameof(phoneNumber));
            ArgumentNullException.ThrowIfNull(userId, nameof(userId));
            ArgumentNullException.ThrowIfNull(emailAddress, nameof(emailAddress));
            ArgumentNullException.ThrowIfNull(address, nameof(address));

            var client = new Client(id, name, nationalId, phoneNumber, clientTypes, userId, emailAddress, address, organization, medicalServiceProvider);
            var clientCreatedEvent = new ClientCreatedEvent(client);
            client.AddDomainEvent(clientCreatedEvent);
            return client;


        }
    }
}
