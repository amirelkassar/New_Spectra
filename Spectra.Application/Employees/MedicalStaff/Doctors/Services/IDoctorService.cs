using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Admin.Queries;
using Spectra.Application.Employees.MedicalStaff.Doctors.Dto;
using Spectra.Application.Employees.MedicalStaff.Doctors.Queries;
using Spectra.Application.Hellper;
using Spectra.Domain.Employees.MedicalStaff.Doctor;
using Spectra.Domain.MedicalPatientProfiles;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.MedicalStaff.Doctors.Services
{
    public interface IDoctorService
    {
        Task<OperationResult<string>> CreateDoctor(string firstName, string lastName, string? prefix, string phoneNumbers, string countryCode, string emailAddress, string country, string city, string nationalId, string academicDegree, string approvedBy, List<string> diagnoses, HumenGender humenGenders, string licenseNumber, List<IFormFile> scientificDegree);
        Task<OperationResult<Unit>> DeleteDoctor(string id);
        Task<OperationResult<IEnumerable<Doctor>>> GetAllDoctors();
        Task<OperationResult<Doctor>> GetDoctorById(string id);

        Task<OperationResult<Unit>> UpdateDoctor(string id, UpdateManagementStaffDto input);


        Task<OperationResult<IEnumerable<Doctor>>> GetAllDoctorSpecificServices();
        Task<OperationResult<PaginatedResult<MedicalPatientProfile>>> GetAllClintsDoctorCare(string id, GetAllClientsInDoctorProfileQuery input);
    }
}