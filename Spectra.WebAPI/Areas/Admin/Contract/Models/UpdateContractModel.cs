using Spectra.Application.Contracts.DTO;

namespace Spectra.WebAPI.Areas.Admin.Contract.Models
{
    public class UpdateContractModel
    {
        public string Id { get; set; }
        public int HoursOfWork { get; set; }
        public int DaysOfWork { get; set; }
        public List<ContractServiceCreateDto>? FreelancingServices { get; set; }
        public List<ContractServiceCreateDto>? SpectraTeamServices { get; set; }
    }
}
