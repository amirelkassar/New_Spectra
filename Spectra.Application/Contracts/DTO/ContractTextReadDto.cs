using Spectra.Domain.Contracts;

namespace Spectra.Application.Contracts.DTO
{
    public class ContractTextReadDto
    {
        public ContractTextReadDto()
        {
            InfoSection = new();
            Sections = [];
        }
        public ContractEmployeeInfoSection InfoSection { get; set; }
        public ICollection<ContractTextSectionDto> Sections { get; set; }
        public string? DoctorSignaturePath { get; set; }
        public string? AdminSignaturePath { get; set; }
        public string? HeadSignaturePath { get; set; }

    }
}
