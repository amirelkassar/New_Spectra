using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using static Spectra.Domain.Shared.Constants.ContractConses;

namespace Spectra.Domain.Contracts
{
    public class EmploymentContract : BaseAuditableEntity<string>
    {
        protected EmploymentContract() { }
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


        public ICollection<ContractVersion> Versions { get; private set; }
        public string Content { get; set; }

        private EmploymentContract(string id,
            int hoursOfWork,
            int daysOfWork,
            string employeeId,
            string employeeName,
            string employeeUserId,
            string employeeHeadId,
            string employeeHeadName,
            string titel,
            ContractStates contractCase,
            ICollection<ContractVersion> versions) : base(id)
        {
            Id = id;
            Titel = titel;
            EmployeeId = employeeId;
            EmployeeName = employeeName;
            EmployeeUserId = employeeUserId;
            EmployeeHeadId = employeeHeadId;
            EmployeeHeadName = employeeHeadName;
            HoursOfWork = hoursOfWork;
            DaysOfWork = daysOfWork;
            Versions = versions;
        }
        public static EmploymentContract Create(string id,
            int hoursOfWork,
            int daysOfWork,
            string employeeId,
            string employeeName,
            string employeeUserId,
            string employeeHeadId,
            string employeeHeadName,
            string titel,
            ContractStates contractCase,
            ICollection<ContractVersion> versions)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(hoursOfWork, nameof(hoursOfWork));
            ArgumentNullException.ThrowIfNull(daysOfWork, nameof(daysOfWork));
            ArgumentNullException.ThrowIfNull(contractCase, nameof(contractCase));
            ArgumentNullException.ThrowIfNull(employeeId, nameof(employeeId));
            ArgumentNullException.ThrowIfNull(employeeUserId, nameof(employeeUserId));
            ArgumentNullException.ThrowIfNull(employeeHeadId, nameof(employeeHeadId));
            ArgumentNullException.ThrowIfNull(employeeHeadName, nameof(employeeHeadName));
            ArgumentNullException.ThrowIfNull(titel, nameof(titel));
            ArgumentNullException.ThrowIfNull(contractCase, nameof(contractCase));
            ArgumentNullException.ThrowIfNull(versions, nameof(versions));

            return new EmploymentContract(id, hoursOfWork, daysOfWork, employeeId, employeeName, employeeUserId, employeeHeadId, employeeHeadName, titel, contractCase, versions);
        }

        public void Accept()
        {
            ContractState = ContractStates.Accepted;
            AcceptingDate= DateTime.UtcNow;
            var lastVersion = Versions.FirstOrDefault(v => v.State == ContractVersionStates.Active);
            lastVersion.AcceptedByDoctor = true;
            lastVersion.AcceptedByDepartmentHead = true;
            lastVersion.AcceptedByAdmin = true;
        }

        public void Cancel(string userId,string username,string? reason=default)
        {
            ContractState = ContractStates.Canceled;
            CancelingDate = DateTime.UtcNow;
            CanceldByUserId = userId;
            CanceldByUsername = username;
            CancelReason = reason;
            var lastVersion = Versions.FirstOrDefault(v => v.State == ContractVersionStates.Active);
            lastVersion.AcceptedByDoctor = false;
            lastVersion.AcceptedByDepartmentHead = false;
            lastVersion.AcceptedByAdmin = false;

        }
    }

}



