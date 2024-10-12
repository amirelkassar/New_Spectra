using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Services
{
    public interface IMedicalTestsAndXrayService
        {
        Task<OperationResult<string>> CreateMedicalTestsAndXray(CreateMedicalTestsAndXraysCommand input);
        Task<OperationResult<Unit>> DeleteMedicalTestsAndXray(string id);
        Task<OperationResult<IEnumerable<MedicalTestsAndXray>>> GetAllMedicalTestsAndXray();
        Task<OperationResult<MedicalTestsAndXray>> GetMedicalTestsAndXrayById(string id);
        Task<OperationResult<Unit>> UpdateMedicalTestsAndXray(string id, UpdateMedicalTestsAndXraysCommand input);
        Task CreateFromExcel(IFormFile input);
        Task<OperationResult<IEnumerable<BassMasterDataDto>>> GetAllMedicalTestsAndXrayNames();

    }
}