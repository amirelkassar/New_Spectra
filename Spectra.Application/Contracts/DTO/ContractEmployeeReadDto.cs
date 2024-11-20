using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Spectra.Domain.Shared.Constants.ContractConses;

namespace Spectra.Application.Contracts.DTO
{
    public class ContractEmployeeReadDto
    {
        public string Titel { get; set; }
        public ContractStates ContractState { get; private set; }
        public string EmployeeId { get; private set; }
        public string EmployeeUserId { get; private set; }
        public string EmployeeHeadId { get; private set; }
        public string EmployeeHeadName { get; private set; }
        public string EmployeeName { get; private set; }
        public int HoursOfWork { get; set; }
        public int DaysOfWork { get; set; }
        public string JobDescription { get; set; }
        public string JobTitle { get; set; }
        public DateTimeOffset? AcceptingDate { get; private set; }
        public DateTimeOffset? CancelingDate { get; private set; }
        public string? CanceldByUserId { get; set; }
        public string? CanceldByUsername { get; set; }
        public string? CancelReason { get; set; }
        public bool? AcceptedByDepartmentHead { get; set; }
        public string Content { get; set; }
        public ICollection<ContractVersionReadDto> Versions { get; set; }
    }
}
