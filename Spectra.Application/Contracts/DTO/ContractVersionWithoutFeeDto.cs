using Spectra.Domain.Shared.Common;
using static Spectra.Domain.Shared.Constants.ContractConses;

namespace Spectra.Application.Contracts.DTO
{
    public class ContractVersionWithoutFeeDto : BaseEntityDto<string>
    {
        public int Order { get; set; }
        public DateTimeOffset CreationDate { get; set; }
        public ContractVersionStates State { get; set; }
        public List<ContractServiceWithoutFeeReadDto>? FreelancingServices { get; set; }
        public List<ContractServiceWithoutFeeReadDto>? SpectraTeamServices { get; set; }
        public bool AcceptedByAdmin { get; set; }
        public bool AcceptedByEmployee { get; set; }
        public bool AcceptedByHead { get; set; }
        public DateTimeOffset? DraftingDate { get; set; }
    }
}
