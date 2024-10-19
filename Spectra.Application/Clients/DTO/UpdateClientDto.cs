using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Clients.DTO
{
    public class UpdateClientDto
    {

        public string FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Prefix { get; set; }
        public string NationalId { get; set; }
        public string PhoneNumbers { get; set; }
        public string CountryCode { get; set; }
        public ClientTypes ClientType { get; set; }
        public string UserId { get; set; }
        public string Emailaddress { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string StreetName { get; set; }
        public string Building { get; set; }
        public string PostalCode { get; set; }
        public string? Floor { get; set; }
        public string? CommonMark { get; set; }
        public Organization? Organization { get; set; }
        public MedicalServiceProvider? MedicalServiceProvider { get; set; }
    }
}
