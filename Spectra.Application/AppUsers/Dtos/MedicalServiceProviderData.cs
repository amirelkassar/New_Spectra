using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.AppUsers.Dtos
{
    public class MedicalServiceProviderData
    {
        public MedicalServiceProviderData()
        {
            Specifications = [];
        }
        public JobTypes? JobType { get; set; }
        public string? MainSpecificationId { get; set; }
        public ICollection<string>? Specifications { get; set; }
        public string? LicenseNumber { get; set; }
        public string? AccreditedBy { get; set; }
        public string? Degree { get; set; }
        public int? NumberOfExperience { get; set; }
    }
}
