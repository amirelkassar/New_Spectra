using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Enums;
using static Spectra.Domain.Shared.Constants.EmployeesConsts;

namespace Spectra.Application.AppUsers.Dtos
{
    public class MedicalServiceProviderData
    {
        public MedicalServiceProviderData()
        {
            Specializations = [];
        }
        public JobTypes JobType { get; set; }
        public string JobName { get; set; }
        public ICollection<string>? Specializations { get; set; }
        public string? LicenseNumber { get; set; }
        public string? ApprovedBy { get; set; }
        public AcademicDegrees? AcademicDegree { get; set; }
        public string MainSpecializationId { get; set; }
        public int? ExperienceYears { get; set; }
        public string? Qualification { get; set; }
        public string? JobDescription { get; set; }
    }
}
