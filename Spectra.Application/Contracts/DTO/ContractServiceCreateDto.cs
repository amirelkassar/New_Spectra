using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Contracts.DTO
{
    public class ContractServiceCreateDto
    {
        public string ServiceId { get; set; }
        public double PlatformPercentage { get; set; }
        public double EmployeePercentage { get; set; }
        public double ServiceFees { get; set; }
        public double EmployeeFees { get; set; }
        public double PlatformFees { get; set; }
        public TimeSpan Duration { get; set; }
    }
}
