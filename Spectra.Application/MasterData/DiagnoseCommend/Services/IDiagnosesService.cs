using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.DiagnoseCommend.Commands;
using Spectra.Application.MasterData.DiagnoseCommend.DTO;
using Spectra.Domain.MasterData.Diagnoses;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.DiagnoseCommend.Services
{
    public interface IDiagnosesService
    {
        Task<OperationResult<string>> CreateDiagnoses(CreateDiagnoseCommand input);
        Task<OperationResult<Unit>> DeleteDiagnoses(string id);
        Task<OperationResult<IEnumerable<Diagnose>>> GetAllDiagnosess();
        Task<OperationResult<Diagnose>> GetDiagnosesById(string id);
        Task <OperationResult<Unit>> UpdateDiagnoses(string id, UpdateDiagnoseCommand input);
        Task CreateFromExcel(IFormFile input);
        Task<OperationResult<IEnumerable<BassMasterDataDto>>> GetAllDiagnosesNames();
    }
}