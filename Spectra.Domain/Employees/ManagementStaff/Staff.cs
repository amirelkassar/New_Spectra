using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;

namespace Spectra.Domain.Employees.ManagementStaff
{
    // Staff : Entitiy is Collect bettwen tow secations Accounts and secretariail
    public class Staff : BassEmployees
    {
        protected Staff() { }
        public string JobName { get; set; }
        public string Qualifications { get; set; }
        public DateOnly? TimeToJoin { get; set; }
        public double? WorkingHours { get; set; }
        public JobTypes JobType { get; set; }

        private Staff(
            string id,
            Name name,
            string nationalId,
            PhoneNumber phoneNumber,
            HumenGender humenGenders,
            EmailAddress emailAddress,
            Address address,
             string jobName,
            string qualifications,
            DateOnly? timeToJoin,
            double? workingHours,
            JobTypes jobType,
            string userId
            )
            : base(id, name, nationalId, phoneNumber, humenGenders, emailAddress, address,userId
                  )

    {
            JobName = jobName;
            Qualifications = qualifications;
            TimeToJoin = timeToJoin;
            WorkingHours = workingHours;
            JobType = jobType;
            UserId = userId;
        }
        


        public static Staff Create(
        string id,
        Name name,
        string nationalId,
        PhoneNumber phoneNumber,
        EmailAddress emailAddress,
        HumenGender humenGenders,
        Address address,
        string jobName,
        string qualifications,
        DateOnly? timeToJoin,
        double? workingHours,
           JobTypes jobType,
           string userId
        )

        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(name, nameof(name));
            ArgumentNullException.ThrowIfNull(nationalId, nameof(nationalId));
            ArgumentNullException.ThrowIfNull(phoneNumber, nameof(phoneNumber));
            ArgumentNullException.ThrowIfNull(address, nameof(address));
            ArgumentNullException.ThrowIfNull(humenGenders, nameof(humenGenders));
            ArgumentNullException.ThrowIfNull(jobName, nameof(jobName));
            ArgumentNullException.ThrowIfNull(qualifications, nameof(qualifications));
            ArgumentNullException.ThrowIfNull(userId, nameof(userId));


            var staff = new Staff(id, name, nationalId, phoneNumber, humenGenders, emailAddress, address, jobName, qualifications, timeToJoin, workingHours,
                jobType , userId);

            return staff;


        }
    }
    }
