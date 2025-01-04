using Mapster;
using Spectra.Domain.Contracts;
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
        public int CurrentVersion { get; set; }
        public DateTimeOffset LastVersionDate { get; set; }
        public bool AcceptedByAdmin { get; set; }
        public bool AcceptedByEmployee { get; set; }
        public bool AcceptedByHead { get; set; }
        public static TypeAdapterConfig Configure() => TypeAdapterConfig<EmploymentContract, ContractListReadDto>
            .NewConfig()
            .Map(dto => dto.CreationDate, src => src.Created)
            .Config;
    }
}
