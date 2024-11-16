using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;

namespace Spectra.Domain.Contracts
{
    public class EmploymentContract : BaseAuditableEntity<string>
    {
        public List<OperationContract>? Freelance { get; set; }
        public List<OperationContract>? SpectraTeam { get; set; }
        public double PlatformFee { get; set; }
        public double Duration { get; set; }
        public int HoursOfWork { get; set; }
        public int DaysOfWork { get; set; }
        public string EmployeeId { get; set; }
        public Name EmployeeName{ get; set; }
        public string Titel { get; set; }
        public ContractCases ContractCase { get; set; }
        public AdminOrEmployee? AdminOrEmployee { get; set; }

      
        //public DateTime StartDate { get; set; }
        //public DateTime EndDate { get; set; }
        protected EmploymentContract() { }

        private EmploymentContract(

            string id,
            List<OperationContract>? freelance,
            List<OperationContract>? spectraTeam,
            int hoursOfWork,
            int daysOfWork,
            string employeeId,
            string titel,
            ContractCases contractCase,
             Name employeeName,
         AdminOrEmployee adminOrEmployee 
            ) : base(id)
        {
            Id = id;
            Freelance = freelance;
            SpectraTeam = spectraTeam;
            HoursOfWork = hoursOfWork;
            DaysOfWork = daysOfWork;
            ContractCase = contractCase;
            EmployeeId = employeeId;
            Titel = titel;
            EmployeeName = employeeName;
            AdminOrEmployee= adminOrEmployee;
        }
        public static EmploymentContract Create(
           string id,
           List<OperationContract>? freelance,
           List<OperationContract>? spectraTeam,
           int hoursOfWork,
           int daysOfWork,
           string employeeId,
           string titel,
           ContractCases contractCase,
           Name employeeName,
            AdminOrEmployee adminOrEmployee

        )
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(hoursOfWork, nameof(hoursOfWork));
            ArgumentNullException.ThrowIfNull(daysOfWork, nameof(daysOfWork));
            ArgumentNullException.ThrowIfNull(contractCase, nameof(contractCase)); 
            ArgumentNullException.ThrowIfNull(employeeId, nameof(employeeId));
            ArgumentNullException.ThrowIfNull(employeeName, nameof(employeeName));

            return new EmploymentContract(id, freelance , spectraTeam, hoursOfWork, daysOfWork ,employeeId, titel, contractCase , employeeName, adminOrEmployee);
        }

    }

}



