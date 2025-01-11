using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.AppUsers.BillingAccounts.Dtos
{
    public class BillingAccountReadDto : BaseEntityDto<string>
    {
        public string BankName { get; set; }
        public string AccountNumber { get; set; }
        public string AccountHolderName { get; set; }
        public string Branch { get; set; }
        public string Country { get; set; }
        public string CountryCode { get; set; }

        public string City { get; set; }
        public bool Default { get; set; }
    }
}
