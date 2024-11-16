using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.MasterData.Sections.Dto
{
    public class GetAllDoctorsDto
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public DateTimeOffset DateOfRequest { get; set; }
        public EmpelyeeRates? Rate { get; set; }
        public List<string> Diagnoses { get; set; }
    }
}
