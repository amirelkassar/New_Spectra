using MongoDB.Bson;
using Spectra.Domain.Clients;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;

namespace Spectra.Domain.ValueObjects
{
    public sealed class Organization : ValueObject
    {

        public Name Name { get; set; }
        public PhoneNumber PhoneNumber { get; set; }
        public string Industry { get; set; }
        public string? TaxNumber { get; set; }
        public EmailAddress EmailAddress { get; set; }
        public string? Website { get; set; }
        public string? RegistrationNumber { get; set; }
        public Address Address { get; set; }
        public string? LogoPath { get; set; }
        public PhoneNumber? LandLine { get; set; }
        public OrganizationTypes OrganizationType { get; set; }
       
    protected override IEnumerable<object> GetEqualityComponents()
        {
            yield return Name;
            yield return PhoneNumber;
            yield return Industry;
            yield return TaxNumber;
            yield return EmailAddress;
            yield return Website;
            yield return RegistrationNumber;
            yield return Address;
            yield return LogoPath;
            yield return LandLine;
            yield return OrganizationType;
        }
    }
}
