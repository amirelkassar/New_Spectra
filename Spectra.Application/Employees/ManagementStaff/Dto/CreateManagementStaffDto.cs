using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.Employees.ManagementStaff.Commands.Dto
{
    public class CreateManagementStaffDto
    {
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
        public string JobName { get; set; }
        public string Qualifications { get; set; }
        public DateOnly TimeToJoin { get; set; }
        public double WorkingHours { get; set; }
        public JobTypes JobType { get; set; }
    }
}
