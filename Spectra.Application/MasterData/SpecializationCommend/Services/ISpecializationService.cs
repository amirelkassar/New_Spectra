using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.SpecializationCommend.Commands;
using Spectra.Application.MasterData.SpecializationCommend.DTO;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.SpecializationCommend.Services
{
    public interface ISpecializationService
    {
<<<<<<< HEAD
=======
        Task CreateFromExcel(IFormFile input);
>>>>>>> Admin-BackEnd
        Task<OperationResult<string>> CreateSpecialization(CreateSpecializationCommand input);
        Task<OperationResult<Unit>> DeleteSpecialization(string id);
        Task<OperationResult<IEnumerable<Domain.MasterData.DoctorsSpecialization.Specialization>>> GetAllSpecializations();
        Task<OperationResult<IEnumerable<GetAllDiagnoseNamesDto>>> GetAllSpecializationsNames();
        Task<OperationResult<Domain.MasterData.DoctorsSpecialization.Specialization>> GetSpecializationById(string id);
        Task<OperationResult<Unit>> UpdateSpecialization(string id, UpdateSpecializationCommand input);
<<<<<<< HEAD
        Task CreateFromExcel(IFormFile input);
=======
>>>>>>> Admin-BackEnd
    }
}