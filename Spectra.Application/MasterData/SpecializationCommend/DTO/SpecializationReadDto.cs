namespace Spectra.Application.MasterData.SpecializationCommend.DTO
{
    public class SpecializationReadDto
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public string? Code { get; set; }
        public int? DoctorCount { get; set; }
        public double? ConsultationCost { get; set; }
    }
}
