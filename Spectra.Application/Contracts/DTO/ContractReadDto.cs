using Spectra.Domain.Shared.Common;
using static Spectra.Domain.Shared.Constants.ContractConses;

namespace Spectra.Application.Contracts.DTO
{
    public class ContractReadDto : BaseEntityDto<string>
    {
        public ContractReadDto()
        {
            Versions = [];
        }
        public string Titel { get; set; }
        public ContractStates ContractState { get; set; }
        public string EmployeeId { get;  set; }
        public string EmployeeUserId { get;  set; }
        public string EmployeeHeadId { get;  set; }
        public string EmployeeHeadName { get;  set; }
        public string EmployeeName { get;  set; }
        public string JobDescription { get; set; }
        public string JobTitle { get; set; }
        public DateTimeOffset? AcceptingDate { get;  set; }
        public DateTimeOffset? CancelingDate { get;  set; }
        public string? CanceldByUserId { get; set; }
        public string? CanceldByUsername { get; set; }
        public string? CancelReason { get; set; }
        public bool? AcceptedByDepartmentHead { get; set; }
        public string Content { get; set; }
        public ICollection<ContractVersionReadDto> Versions { get; set; }
    }
}
