using static Spectra.Domain.Shared.Constants.ContractConses;

namespace Spectra.Application.Contracts.DTO
{
    public class ContractListReadDto
    {
        public string Id { get; set; }
        public string EmployeeName { get; set; }
        public DateTimeOffset CreationDate { get; set; }
        public string JobTitle { get; set; }
        public ContractStates ContractState { get; set; }
    }
}
