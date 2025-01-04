using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Dtos
{
    public class MedicalTestsAndXrayReadDto : BaseEntityDto<string>
    {
        public string Name { get; set; }
        public string? Code { get; set; }
        public ExaminationType ExaminationTypes { get; set; }
    }
}
