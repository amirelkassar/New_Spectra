using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Admin.Dto
{
    public class GetAllCopiesWithDataDto
    {
        public string ContractId { get; set; }
        public string EmployeeId { get; set; }

        public DateTimeOffset Date { get; set; }
        public ContractCases ContractCase { get; set; }

    }
}
