using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Domain.Shared.Common;

namespace Spectra.Application.AppUsers.UserWallets.Dtos
{
    public class WalletReadDto : BaseEntityDto<string>
    {
        public string UserId { get; set; }
        public double? FreezedBalance { get; set; }
        public double? AvailableBalance { get; set; }
        public double? TotalDeposit { get; set; }
        public double? TotalWithdrawal { get; set; }
    }
}
