using System;
using System.Collections.Generic;
using static Spectra.Domain.Shared.Constants.ContractConses;

namespace Spectra.Domain.Contracts
{
    public class ContractVersion
    {
        public int Order { get; set; }
        public DateTimeOffset CreationDate { get; set; }
        public ContractVersionStates State { get; set; }
        public List<ContractService>? FreelancingServices { get; set; }
        public List<ContractService>? SpectraTeamServices { get; set; }
        public bool AcceptedByDoctor { get; set; }
        public bool AcceptedByAdmin { get; set; }
        public bool AcceptedByDepartmentHead { get; set; }
        public DateTimeOffset? DraftingDate { get; set; }

    }
}
