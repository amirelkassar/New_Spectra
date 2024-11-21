using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;

namespace Spectra.Domain.Employees.ManagementStaff
{
    // Staff : Entitiy is Collect bettwen tow secations Accounts and secretariail
    public class Staff : EmployeeBase
    {
        protected Staff() { }
        public double? WorkingHours { get; set; }

        private Staff(string id,
            Name name,
            string nationalId,
            PhoneNumber phoneNumber,
            HumenGender humenGender,
            EmailAddress emailAddress,
            Address address,
            string jobName,
            JobTypes jobType,
            string userId
            )
            : base(id, name, nationalId, phoneNumber, humenGender, emailAddress, address, userId, jobType, jobName)
        {

        }
        public static Staff Create(string id,
            Name name,
            string nationalId,
            HumenGender humenGender,
            PhoneNumber phoneNumber,
            EmailAddress emailAddress,
            Address address,
            string jobName,
            JobTypes jobType,
            string userId)

        {
            return new Staff(id, name, nationalId, phoneNumber, humenGender, emailAddress, address, jobName, jobType, userId);
        }
    }
}
