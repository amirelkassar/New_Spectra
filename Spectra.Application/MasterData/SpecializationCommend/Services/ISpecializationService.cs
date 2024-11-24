using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.SpecializationCommend.Commands;
using Spectra.Application.MasterData.SpecializationCommend.Queries;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.SpecializationCommend.Services
{
    public interface ISpecializationService
    {
        Task CreateFromExcel(IFormFile input);
        Task<OperationResult> CreateSpecialization(CreateSpecializationCommand input);
        Task<OperationResult> DeleteSpecialization(string id);
        Task<OperationResult> GetAllSpecializations(GetAllSpecializationQuery input);
        Task<OperationResult> GetSpecializationById(string id);
        Task<OperationResult> UpdateSpecialization(UpdateSpecializationCommand input);
    }
}