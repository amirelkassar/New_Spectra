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
        public string ServiceName { get; set; }
        public string ServiceTerms { get; set; }
        public TimeSpan? Duration { get; set; }
    }
}
