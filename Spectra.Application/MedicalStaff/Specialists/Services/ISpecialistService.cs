using MediatR;
using Spectra.Application.MedicalStaff.Specialists.Dto;
using Spectra.Domain.MedicalStaff.Specialists;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MedicalStaff.Specialists.Services
{
    public interface ISpecialistService
    {
        Task<OperationResult<string>> CreateSpecialist(CreateSpecialistDto input);
        Task<OperationResult<Unit>> DeleteSpecialist(string id);
        Task<OperationResult<IEnumerable<Specialist>>> GetAllSpecialists();
        Task<OperationResult<Specialist>> GetSpecialistById(string id);
        Task<OperationResult<Unit>> UpdateSpecialist(string id, UpdateSpecialistDto input);
    }
}