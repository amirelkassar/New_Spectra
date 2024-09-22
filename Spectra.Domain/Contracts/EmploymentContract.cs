using Spectra.Domain.Shared.Common;
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
        public bool SendContract { get; set; }
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
            //DateTime startDate,
            // DateTime endDate
             bool sendContract
            ) : base(id)
        {
            Id = id;
            Freelancer = freelancer;
            SpectraTeam = spectraTeam;
            HoursOfWork = hoursOfWork;
            DaysOfWork = daysOfWork;
            MinutesOfWork = minutesOfWork;
            SendContract = sendContract;
        }
        public static EmploymentContract Create(
   string id,
         List<OperationContrct>? freelancer,
            List<OperationContrct>? spectraTeam,
            int hoursOfWork,
            int daysOfWork,
         int minutesOfWork,
         bool sendContract
        )
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(hoursOfWork, nameof(hoursOfWork));
            ArgumentNullException.ThrowIfNull(daysOfWork, nameof(daysOfWork));
            ArgumentNullException.ThrowIfNull(minutesOfWork, nameof(minutesOfWork));



            return new EmploymentContract(id, freelancer, spectraTeam , hoursOfWork, daysOfWork , minutesOfWork , sendContract) ;

        }
      
    }
   
}
  

  
