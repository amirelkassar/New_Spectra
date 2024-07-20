using Spectra.Domain.Enumeration;
using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.ValueObjects
{
    public class MedicalServiceProvider : ValueObject
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
        public string? LegalPermissionNumber { get; set; }
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
            yield return LegalPermissionNumber;
        }
    }
}
