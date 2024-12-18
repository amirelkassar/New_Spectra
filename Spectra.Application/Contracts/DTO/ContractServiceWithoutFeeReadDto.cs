using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Contracts.DTO
{
    public class ContractServiceWithoutFeeReadDto
    {
        public string ServiceId { get; set; }
        public string ArName { get; set; }
        public string EnName { get; set; }
        public string? ArTerms { get; set; }
        public string? EnTerms { get; set; }
        public int? Duration { get; set; } // in min
    }
}
