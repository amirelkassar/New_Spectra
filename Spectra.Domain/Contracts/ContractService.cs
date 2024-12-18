using System;

namespace Spectra.Domain.Contracts
{
    public class ContractService
    {
        public string ServiceId { get; set; }
        public string ArName { get; set; }
        public string EnName { get; set; }

        public string? ArTerms { get; set; }
        public string? EnTerms { get; set; }

        public double? PlatformPercentage { get; set; }
        public double? EmployeePercentage { get; set; }
        public double? ServiceFees { get; set; }
        public double? EmployeeFees { get; set; }
        public double? PlatformFees { get; set; }
        public int? Duration { get; set; } // in min
    }
}
