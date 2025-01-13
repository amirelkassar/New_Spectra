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
            string accountNumber,
            string accountName,
            string bank,
            string country,
            string countryCode)
        {
            Id = id;
            UserId = userId;
            BankName = bank;
            AccountNumber = accountNumber;
            AccountHolderName = accountName;
            Country = country;
            CountryCode = countryCode;
            Default = false;
        }
        public string UserId { get; private set; }
        public string BankName { get; set; }
        public string AccountNumber { get; set; }
        public string AccountHolderName { get; set; }
        public string? Branch { get; set; }
        public string Country { get; set; }
        public string CountryCode { get; set; }
        public string? City { get; set; }
        public bool Default { get; set; }

    }
}
