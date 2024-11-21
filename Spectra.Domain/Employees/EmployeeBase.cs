using Spectra.Domain.Enumeration;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;

namespace Spectra.Domain.Employees
{
    public abstract class EmployeeBase : BaseAuditableEntity<string>
    {
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
        public string Description { get; set; }
        protected EmployeeBase() { }

        public EmployeeBase(
                  string id,
                  Name name,
                  string nationalId,
                  PhoneNumber phoneNumber,
                  HumenGender humenGender,
                  EmailAddress emailAddress,
                  Address address,
                  string userId,
                  JobTypes job,
                  string jobName) : base(id)
         {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(name, nameof(name));
            ArgumentNullException.ThrowIfNull(nationalId, nameof(nationalId));
            ArgumentNullException.ThrowIfNull(phoneNumber, nameof(phoneNumber));
            ArgumentNullException.ThrowIfNull(address, nameof(address));
            ArgumentNullException.ThrowIfNull(humenGender, nameof(humenGender));
            ArgumentNullException.ThrowIfNull(jobName, nameof(jobName));
            ArgumentNullException.ThrowIfNull(job, nameof(job));
            ArgumentNullException.ThrowIfNull(userId, nameof(userId));
            Id = id;
            Name = name;
            NationalId = nationalId;
            MobileNumber = phoneNumber;
            EmailAddress = emailAddress;
            HumenGender = humenGender;
            Address = address;
            UserId = userId;
            JobType = job;
            JobName = jobName;
            }
    }


}
