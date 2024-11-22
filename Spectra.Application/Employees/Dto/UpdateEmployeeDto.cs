using Microsoft.AspNetCore.Http;
using Spectra.Domain.Employees.MedicalStaff;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using static Spectra.Domain.Shared.Constants.EmployeesConsts;

namespace Spectra.Application.Employees.Dto
{
    public class UpdateEmployeeDto
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Prefix { get; set; }
        public string NationalId { get; set; }
        public HumenGender HumenGender { get; set; }
        public string Emailaddress { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string? State { get; set; }
        public string? StreetName { get; set; }
        public string? Building { get; set; }
        public string? PostalCode { get; set; }
        public string? Floor { get; set; }
        public string? CommonMark { get; set; }
        public string PhoneNumber { get; set; }
        public string CountryCode { get; set; }
        public string JobName { get; set; }
        public JobTypes JobType { get; set; }
        public string? JobDescription { get; set; }
        public string LicenseNumber { get; set; }
        public int? ExperienceYears { get; set; }
        public string? Qualification { get; set; }
        public double? WorkingHours { get; set; }
        public string ApprovedBy { get; set; }
        public AcademicDegrees AcademicDegree { get; set; }

    }
}
