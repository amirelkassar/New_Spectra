using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Services
{
    public interface IMedicalTestsAndXrayService
    {
        Task CreateFromExcel(IFormFile input);
        Task<OperationResult<string>> CreateMedicalTestsAndXray(CreateMedicalTestsAndXraysCommand input);
        Task<OperationResult<Unit>> DeleteMedicalTestsAndXray(string id);
        Task<OperationResult<IEnumerable<Domain.MasterData.MedicalTestsAndXrays.MedicalTestsAndXray>>> GetAllMedicalTestsAndXray();
        Task<OperationResult<IEnumerable<BassMasterDataDto>>> GetAllMedicalTestsAndXrayNames();
        Task<OperationResult<Domain.MasterData.MedicalTestsAndXrays.MedicalTestsAndXray>> GetMedicalTestsAndXrayById(string id);
        Task<OperationResult<Unit>> UpdateMedicalTestsAndXray(string id, UpdateMedicalTestsAndXraysCommand input);
    }
}