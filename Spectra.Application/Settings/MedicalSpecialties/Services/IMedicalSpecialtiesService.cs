using MediatR;
using Spectra.Application.Settings.MedicalSpecialties.Commands;
using Spectra.Domain.Settings.MedicalSpecialties;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Settings.MedicalSpecialties.Services
{
    public interface IMedicalSpecialtiesService
    {
        Task<OperationResult<string>> CreateMedicalSpecialties(CreateMedicalSpecialtCommand input);
        Task<OperationResult<Unit>> DeleteMedicalSpecialties(string id);
        Task<OperationResult<IEnumerable<MedicalSpecialt>>> GetAllMedicalSpecialties();
        Task<OperationResult<MedicalSpecialt>> GetMedicalSpecialtiesMById(string id);
        Task<OperationResult<Unit>> UpdateMedicalSpecialties(string id, UpdateMedicalSpecialtCommand input);
    }
}