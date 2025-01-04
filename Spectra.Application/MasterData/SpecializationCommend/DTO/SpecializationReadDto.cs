using Spectra.Domain.Shared.Common;

namespace Spectra.Application.MasterData.SpecializationCommend.DTO
{
    public class SpecializationReadDto : BaseEntityDto<string>
    {
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string? EnDescription { get; set; }
        public string? ArDescription { get; set; }
        public string? Code { get; set; }
        public int? DoctorCount { get; set; }
        public double? ConsultationCost { get; set; }
    }
}
