using Mapster;
using Spectra.Application.Employees.Dto;
using Spectra.Domain.Contracts;
using Spectra.Domain.Employees;
using static Spectra.Domain.Shared.Constants.ContractConses;

namespace Spectra.Application.Contracts.DTO
{
    public class ContractVersionReadDto
    {
        public string Id { get; set; }
        public int Order { get; set; }
        public DateTimeOffset CreationDate { get; set; }
        public ContractVersionStates State { get; set; }
        public int HoursOfWork { get; set; }
        public int DaysOfWork { get; set; }
        public double FreelancingPercentage { get; set; }
        public double SpectraTeamPercentage { get; set; }
        public int FreelancingDuration { get; set; }
        public int SpectraTeamDuration { get; set; }
        public List<ContractServiceReadDto>? FreelancingServices { get; set; }
        public List<ContractServiceReadDto>? SpectraTeamServices { get; set; }
        public bool AcceptedByAdmin { get; set; }
        public bool AcceptedByEmployee { get; set; }
        public bool AcceptedByHead { get; set; }
        public DateTimeOffset? DraftingDate { get; set; }
    }
}
