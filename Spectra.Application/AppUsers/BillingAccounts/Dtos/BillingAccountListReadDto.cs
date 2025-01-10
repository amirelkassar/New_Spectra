using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.AppUsers.BillingAccounts.Dtos
{
    public class BillingAccountListReadDto
    {
        public string Id { get; set; }
        public string BankName { get; set; }
        public string AccountHolderName { get; set; }
        public bool Default { get; set; }
    }
}
