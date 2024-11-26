using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Queries;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Services
{
    public interface IMedicalTestsAndXrayService
    {
        Task CreateFromExcel(IFormFile input);
        Task<OperationResult> CreateMedicalTestsAndXray(CreateMedicalTestsAndXraysCommand input);
        Task<OperationResult> DeleteMedicalTestsAndXray(string id);
        Task<OperationResult> GetAllMedicalTestsAndXray(GetAllMedicalTestsAndXraysQuery input);
        Task<OperationResult> GetMedicalTestsAndXrayById(string id);
        Task<OperationResult> UpdateMedicalTestsAndXray(UpdateMedicalTestsAndXraysCommand input);
    }
}