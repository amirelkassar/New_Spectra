using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MedicalStaff.Specialists.Dto;
using Spectra.Domain.MedicalStaff.Specialists;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MedicalStaff.Specialists.Services
{
    public interface ISpecialistService
    {
  
        Task<OperationResult<string>> CreateSpecialist(string firstName, string lastName, string? prefix, string phoneNumbers, string countryCode, string emailAddress, string country, string city, string nationalId, string academicDegree, string approvedBy, List<string> diagnoses, HumenGender humenGenders, string licenseNumber, List<IFormFile> scientificDegree);
        Task<OperationResult<Unit>> DeleteSpecialist(string id);
        Task<OperationResult<IEnumerable<Specialist>>> GetAllSpecialists();
        Task<OperationResult<Specialist>> GetSpecialistById(string id);
        Task<OperationResult<Unit>> UpdateSpecialist(string id, UpdateSpecialistDto input);
    }
}