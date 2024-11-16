using System;

namespace Spectra.Domain.Contracts
{
    public class SubContract
    {
        public string SubContractId { get; set; }
        public EmploymentContract Contracts { get; set; }

        protected SubContract() { }

        private SubContract(string subContractId, EmploymentContract contracts)
        {
            SubContractId = subContractId;
            Contracts = contracts;
        }

        public static SubContract Create(string subContractId, EmploymentContract contracts)
        {
            ArgumentNullException.ThrowIfNull(subContractId, nameof(subContractId));
            ArgumentNullException.ThrowIfNull(contracts, nameof(contracts));
            return new SubContract(subContractId, contracts);
        }


    }
}
