using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Contracts
{
    public class ContractService
    {
        public string ServiceId { get; set; }
        public string ServiceName { get; set; }
        public string ServiceTerms { get; set; }
        public double? PlatformPercentage { get; set; }
        public double? EmployeePercentage  { get; set; }
        public double? ServiceFees { get; set; }
        public double? EmployeeFees { get; set; }
        public double? PlatformFees { get; set; }
        public TimeSpan? Duration { get; set; }
    }
}
