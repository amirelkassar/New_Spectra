using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.DiagnoseCommend.Commands;
using Spectra.Application.MasterData.DiagnoseCommend.Queries;
using Spectra.Domain.MasterData.Diagnoses;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.DiagnoseCommend.Services
{
    public interface IDiagnosesService
    {
        Task<OperationResult> CreateDiagnoses(CreateDiagnoseCommand input);
        Task<OperationResult> DeleteDiagnoses(DeleteDiagnoseCommand input);
        Task<OperationResult> GetAllDiagnosess(GetAllDiagnoseQuery input);
        Task<OperationResult> GetDiagnosesById(string id);
        Task<OperationResult> UpdateDiagnoses(UpdateDiagnoseCommand input);
        Task CreateFromExcel(IFormFile input);
    }
}