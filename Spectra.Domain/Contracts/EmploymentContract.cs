using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;

namespace Spectra.Domain.Contracts
{
    public class EmploymentContract : BaseAuditableEntity<string>
    {
        public List<OperationContrct>? Freelancer { get; set; }
        public List<OperationContrct>? SpectraTeam { get; set; }
        public int HoursOfWork { get; set; }
        public int DaysOfWork { get; set; }
        public int MinutesOfWork { get; set; }

        public string EmployeeId { get; set; }
        public string Titel { get; set; }

        public ContractCases ContractCase { get; set; }
        //public DateTime StartDate { get; set; }
        //public DateTime EndDate { get; set; }
        protected EmploymentContract() { }

        private EmploymentContract(

         string id,
         List<OperationContrct>? freelancer,
            List<OperationContrct>? spectraTeam,
            int hoursOfWork,
            int daysOfWork,
            int minutesOfWork,

           string employeeId,
           string titel,
            ContractCases contractCase
            ) : base(id)
        {
            Id = id;
            Freelancer = freelancer;
            SpectraTeam = spectraTeam;
            HoursOfWork = hoursOfWork;
            DaysOfWork = daysOfWork;
            MinutesOfWork = minutesOfWork;
            ContractCase = contractCase;
            EmployeeId = employeeId;
            Titel = titel;
        }
        public static EmploymentContract Create(
             string id,
            List<OperationContrct>? freelancer,
            List<OperationContrct>? spectraTeam,
            int hoursOfWork,
            int daysOfWork,
            int minutesOfWork,
             ContractCases contractCase,
                   string employeeId,
           string titel

        )
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(hoursOfWork, nameof(hoursOfWork));
            ArgumentNullException.ThrowIfNull(daysOfWork, nameof(daysOfWork));
            ArgumentNullException.ThrowIfNull(minutesOfWork, nameof(minutesOfWork));
            ArgumentNullException.ThrowIfNull(contractCase, nameof(contractCase));
            ArgumentNullException.ThrowIfNull(employeeId, nameof(employeeId));
            ArgumentNullException.ThrowIfNull(titel, nameof(titel));

            return new EmploymentContract(id, freelancer, spectraTeam, hoursOfWork, daysOfWork, minutesOfWork, employeeId, titel, contractCase);
        }

    }

}



