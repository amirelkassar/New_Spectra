using Spectra.Domain.MasterData.Sections;
using Spectra.Domain.Shared.Common;

namespace Spectra.Application.MasterData.Sections.Dto
{
    public class SectionDto : BaseEntityDto<string>
    {
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string HeadDoctorId { get; set; }
        public string HeadDoctorName { get; set; }
        public ICollection<SectionSpecsification> Specsifications { get; set; }
    }
}
