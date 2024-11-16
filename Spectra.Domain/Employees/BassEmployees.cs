using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Employees
{
    public abstract class BassEmployees : BaseAuditableEntity<string>
    {
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public PhoneNumber? MobileNumber { get; set; }
        public HumenGender HumenGenders { get; set; }
        public EmailAddress EmailAddress { get; set; }
        public Address Address { get; set; }
        public string UserId { get; set; }
        protected BassEmployees() { }

        public BassEmployees(
                  string id,
                  Name name,
                  string nationalId,
                  PhoneNumber phoneNumber,
                  HumenGender humenGenders,
                  EmailAddress emailAddress,
                  Address address,
                  string userId
                  ) : base(id)
         {
            Id = id;
            Name = name;
            NationalId = nationalId;
            MobileNumber = phoneNumber;
            EmailAddress = emailAddress;
            HumenGenders = humenGenders;
            Address = address;
            UserId = userId;
            }
    }


}
