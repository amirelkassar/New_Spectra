using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.AppUser.UserBilling
{
    public class UserBillingAccount : BaseAuditableEntity<string>
    {
        public UserBillingAccount(string id,
            string userId,
            string bankName,
            string accountNumber,
            string accountName,
            string branch,
            string country,
            string city)
        {
            Id = id;
            UserId = userId;
            BankName = bankName;
            AccountNumber = accountNumber;
            AccountHolderName = accountName;
            Branch = branch;
            Country = country;
            City = city;
            Default = false;
        }
        public string UserId { get; private set; }
        public string BankName { get; set; }
        public string AccountNumber { get; set; }
        public string AccountHolderName { get; set; }
        public string Branch { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public bool Default { get; set; }

    }
}
