namespace Spectra.WebAPI.Areas.Admin.Contract.Models
{
    public class UpdateContractModel
    {
        public string Id { get; set; }
        public int HoursOfWork { get; set; }
        public int DaysOfWork { get; set; }
        public double FreelancingPercentage { get; set; }
        public double SpectraTeamPercentage { get; set; }
        public int FreelancingDuration { get; set; }
        public int SpectraTeamDuration { get; set; }
        public List<string>? FreelancingServices { get; set; }
        public List<string>? SpectraTeamServices { get; set; }
    }
}
