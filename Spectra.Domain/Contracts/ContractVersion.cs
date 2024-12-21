using System;
using System.Collections.Generic;
using static Spectra.Domain.Shared.Constants.ContractConses;

namespace Spectra.Domain.Contracts
{
    public class ContractVersion(string id,
        int hoursOfWork,
        int daysOfWork,
        double freelancingPercentage,
        double spectraPercentage,
        int freelancingDuration,
        int spectraDuration)
    {
        public string Id { get; private set; } = id;
        public int Order { get; set; }
        public DateTimeOffset CreationDate { get; set; }
        public ContractVersionStates State { get; set; }
        public List<ContractService>? FreelancingServices { get; set; } = [];
        public List<ContractService>? SpectraTeamServices { get; set; } = [];
        public bool AcceptedByEmployee { get; set; }
        public DateTimeOffset? ChangedByEmployeeDate { get; set; }
        public bool AcceptedByAdmin { get; set; }
        public DateTimeOffset? ChangedByAdminDate { get; set; }

        public bool AcceptedByHead { get; set; }
        public DateTimeOffset? ChangedByHeadDate { get; set; }

        public DateTimeOffset? DraftingDate { get; set; }
        public int HoursOfWork { get; private set; } = hoursOfWork;
        public int DaysOfWork { get; private set; } = daysOfWork;
        public double FreelancingPercentage { get; private set; } = freelancingPercentage;
        public double SpectraTeamPercentage { get; private set; } = spectraPercentage;
        public int FreelancingDuration { get; private set; } = freelancingDuration;
        public int SpectraTeamDuration { get; private set; } = spectraDuration;

    }
}
