using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.AppUsers.Dtos
{
    public class PatientDataDto
    {
        public string? Name { get; set; }
        public HumenGender? Gender { get; set; }
        public string? NationalId { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public double? Height { get; set; }
        public double? Weight { get; set; }
        public string? Symptoms { get; set; }
        public DateTime? DateOfSymptoms { get; set; }
        public string? Notes { get; set; }
    }
}
