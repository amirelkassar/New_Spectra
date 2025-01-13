using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.AppUser.UserWallet
{
    public class UserWallet : BaseAuditableEntity<string>
    {
        public UserWallet(string id,
            string userId)
        {
            Id = id;
            UserId = userId;
        }
        public string UserId { get; private set; }
        public double CurrentBalance { get; set; }
        public double? FreezedBalance { get; set; }
        public double? AvailableBalance { get; set; }
        public double? TotalDeposit { get; set; }
        public double? TotalWithdrawal { get; set; }
    }
}
