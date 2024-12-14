using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Spectra.Domain.Shared.Constants.ContractConses;

namespace Spectra.Application.Contracts.DTO
{
    public class ContractVersionWithoutFeeDto
    {
        public int Order { get; set; }
        public DateTimeOffset CreationDate { get; set; }
        public ContractVersionStates State { get; set; }
        public List<ContractWithoutFeeReadDto>? FreelancingServices { get; set; }
        public List<ContractWithoutFeeReadDto>? SpectraTeamServices { get; set; }
        public bool AcceptedByEmployee { get; set; }
        public bool AcceptedByAdmin { get; set; }
        public DateTimeOffset? DraftingDate { get; set; }
    }
}
