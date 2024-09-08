using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Clients.DTO
{
    public class CreateMedicalServiceProviderClientDto

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
    }
}
