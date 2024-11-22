using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Employees.ManagementStaff.Dto
{
    public abstract class EmployeeBaseDto
    {
        public string FirstName { get; set; }
        public string? LastName { get; set; }
        public string NationalId { get; set; }
        public string PhoneNumber { get; set; }
        public string CountryCode { get; set; }
        public HumenGender HumenGender { get; set; }
        public string EmailAddress { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string? State { get; set; }
        public string? StreetName { get; set; }
        public string? Building { get; set; }
        public string? PostalCode { get; set; }
        public string? Floor { get; set; }
        public string? CommonMark { get; set; }
        public string JobName { get; set; }
        public JobTypes JobType { get; set; }
        public int? ExperienceYears { get; set; }
        public string? Qualification { get; set; }
        public string? JobDescription { get; set; }
    }
}
