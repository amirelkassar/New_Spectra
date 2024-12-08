using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using static Spectra.Domain.Shared.Constants.EmployeesConsts;

namespace Spectra.Domain.Employees
{
    public class Employee : BaseAuditableEntity<string>
    {
        public string? LicenseNumber { get; set; }
        public string? ApprovedBy { get; set; }
        public AcademicDegrees? AcademicDegree { get; set; }
        public string MainSpecializationId { get; set; }
        public string MainSpecializationEnName { get; set; }
        public string MainSpecializationArName { get; set; }
        public string? SectionId { get; set; }
        public string? SectionEnName { get; set; }
        public string? SectionArEnName { get; set; }
        public double? WorkingHours { get; set; }
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public PhoneNumber? MobileNumber { get; set; }
        public HumenGender HumenGender { get; set; }
        public EmailAddress EmailAddress { get; set; }
        public Address Address { get; set; }
        public string UserId { get; set; }
        public string JobName { get; set; }
        public JobTypes JobType { get; set; }
        public int? ExperienceYears { get; set; }
        public string? Qualification { get; set; }
        public string? JobDescription { get; set; }
        public ICollection<EmployeeAttachment>? Attachments { get; set; } 
        public ICollection<EmployeeSpecialization>? Specializations { get; set; }
        public ICollection<EmployeeService>? Services { get; set; }

        public int? Rating { get; set; }
        public int? TotalRates { get; set; }

        public string UserImage { get; set; }

        protected Employee() { }
        public Employee(string id,
                   Name name,
                   string nationalId,
                   PhoneNumber phoneNumber,
                   HumenGender humenGender,
                   EmailAddress emailAddress,
                   Address address,
                   JobTypes jobType,
                   string jobName) : base(id)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(name, nameof(name));
            ArgumentNullException.ThrowIfNull(nationalId, nameof(nationalId));
            ArgumentNullException.ThrowIfNull(phoneNumber, nameof(phoneNumber));
            ArgumentNullException.ThrowIfNull(address, nameof(address));
            ArgumentNullException.ThrowIfNull(humenGender, nameof(humenGender));
            ArgumentNullException.ThrowIfNull(jobName, nameof(jobName));
            ArgumentNullException.ThrowIfNull(jobType, nameof(jobType));
            Name = name;
            NationalId = nationalId;
            MobileNumber = phoneNumber;
            HumenGender = humenGender;
            EmailAddress = emailAddress;
            Address = address;
            JobType = jobType;
            JobName = jobName;

            Attachments = [];
            Specializations = [];
            Services = [];
        }

        public void SetUser(string userId)
        {
            if (UserId is null)
            {
                UserId = userId;
            }
        }

        public static Employee Create(string id,
                   Name name,
                   string nationalId,
                   PhoneNumber phoneNumber,
                   HumenGender humenGender,
                   EmailAddress emailAddress,
                   Address address,
                   JobTypes jobType,
                   string jobName)
        {

            return new(id,
                name,
                nationalId,
                phoneNumber,
                humenGender,
                emailAddress,
                address,
                jobType,
                jobName);
        }

    }

}
