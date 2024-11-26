using static Spectra.Domain.Shared.Constants.ContractConses;

namespace Spectra.Application.Contracts.DTO
{
    public class ContractVersionReadDto
    {
        public int Order { get; set; }
        public DateTimeOffset CreationDate { get; set; }
        public ContractVersionStates State { get; set; }
        public List<ContractServiceReadDto>? FreelancingServices { get; set; }
        public List<ContractServiceReadDto>? SpectraTeamServices { get; set; }
        public bool AcceptedByEmployee { get; set; }
        public bool AcceptedByAdmin { get; set; }
        public DateTimeOffset? DraftingDate { get; set; }
    }
}
