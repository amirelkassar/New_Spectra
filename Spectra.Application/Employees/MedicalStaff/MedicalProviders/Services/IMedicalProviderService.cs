using MediatR;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Dto;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Queries;
using Spectra.Application.Hellper;
using Spectra.Domain.Employees.MedicalStaff;
using Spectra.Domain.MasterData.DoctorsSpecialization;
using Spectra.Domain.MedicalPatientProfiles;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.MedicalStaff.MedicalProviders.Services
{
    public interface IMedicalProviderService
    {
        Task<OperationResult<string>> CreateMedicalProvider(string firstName, string lastName, string? prefix, string phoneNumbers, string countryCode, string emailAddress, string country, string city, string nationalId, string academicDegree, string approvedBy,
            List<string> diagnoses, HumenGender humenGenders, string licenseNumber, JobTypes JobTypes , string password, string confirmationPassword ,string specializationId);
        Task<OperationResult<Unit>> DeleteMedicalProvider(string id);
        Task<OperationResult<PaginatedResult<MedicalPatientProfile>>> GetAllClintsMedicalProviderCare(string id, GetAllClientsInMedicalProviderProfileQuery input);
        Task<OperationResult<IEnumerable<MedicalProvider>>> GetAllMedicalProviders();
        Task<OperationResult<IEnumerable<MedicalProvider>>> GetAllMedicalProviderSpecificServices();
        Task<OperationResult<MedicalProvider>> GetMedicalProviderById(string id);
        Task<OperationResult<Unit>> UpdateMedicalProvider(string id, UpdateDoctorDto input);
    }
}