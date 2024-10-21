using Microsoft.AspNetCore.Http;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.MedicalStaff.Specialists.Dto
{
    public class UpdateSpecialistDto
    {

        public string Id { get; set; }
        public string FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Prefix { get; set; }
        public string NationalId { get; set; }
        public HumenGender HumenGenders { get; set; }
        public string Emailaddress { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string PhoneNumbers { get; set; }
        public string CountryCode { get; set; }
        public List<string> Diagnoses { get; set; }
        public string? LicenseNumber { get; set; }
        public string? ApprovedBy { get; set; }
        public string Academicdegree { get; set; }
        public List<IFormFile> ScientificDegree { get; set; }

    }
}
