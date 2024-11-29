using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Dtos
{
    public class MedicalTestsAndXrayReadDto
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string? Code { get; set; }
        public ExaminationType ExaminationTypes { get; set; }
    }
}
