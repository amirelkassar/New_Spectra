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
        public ICollection<EmployeeSpecialization>? Specializations { get; set; }
        public ICollection<EmployeeService>? Services { get; set; }
        public string? LicenseNumber { get; set; }
        public string? ApprovedBy { get; set; }
        public AcademicDegrees? AcademicDegree { get; set; }
        public string MainSpecializationId { get; set; }
        public string MainSpecializationName { get; set; }
        public string? SectionId { get; set; }
        public string? SectionName { get; set; }
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
        public List<EmployeeAttachment>? Attachments { get; set; } = [];

        protected Employee() { }
        public Employee(string id,
                   Name name,
                   string nationalId,
                   PhoneNumber phoneNumber,
                   HumenGender humenGender,
                   EmailAddress emailAddress,
                   Address address,
                   JobTypes jobType,
                   string jobName,
                  string userId) : base(id)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(name, nameof(name));
            ArgumentNullException.ThrowIfNull(nationalId, nameof(nationalId));
            ArgumentNullException.ThrowIfNull(phoneNumber, nameof(phoneNumber));
            ArgumentNullException.ThrowIfNull(address, nameof(address));
            ArgumentNullException.ThrowIfNull(humenGender, nameof(humenGender));
            ArgumentNullException.ThrowIfNull(jobName, nameof(jobName));
            ArgumentNullException.ThrowIfNull(jobType, nameof(jobType));
            ArgumentNullException.ThrowIfNull(userId, nameof(userId));
            Name = name;
            NationalId= nationalId;
            MobileNumber = phoneNumber;
            HumenGender= humenGender;
            EmailAddress= emailAddress;
            Address= address;
            UserId= userId;
            JobType= jobType;
            JobName= jobName;
        }

        public static Employee Create(string id,
                   Name name,
                   string nationalId,
                   PhoneNumber phoneNumber,
                   HumenGender humenGender,
                   EmailAddress emailAddress,
                   Address address,
                   JobTypes jobType,
                   string jobName,
                  string userId)
        {

            return new(id,
                name,
                nationalId,
                phoneNumber,
                humenGender,
                emailAddress,
                address,
                jobType,
                jobName,
                userId );
        }

    }

}
