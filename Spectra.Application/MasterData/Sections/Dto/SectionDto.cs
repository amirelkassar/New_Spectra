using Spectra.Domain.MasterData.Sections;

namespace Spectra.Application.MasterData.Sections.Dto
{
    public class SectionDto
    {
        public string Id { get; set; }
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string HeadDoctorId { get; set; }
        public string HeadDoctorName { get; set; }
        public ICollection<SectionSpecsification> Specsifications { get; set; }
    }
}
