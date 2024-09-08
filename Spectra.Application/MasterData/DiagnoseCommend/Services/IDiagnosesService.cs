using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.DiagnoseCommend.Commands;
using Spectra.Domain.MasterData.Diagnoses;

namespace Spectra.Application.MasterData.DiagnoseCommend.Services
{
    public interface IDiagnosesService
    {
        Task<string> CreateDiagnoses(CreateDiagnoseCommand input);
        Task DeleteDiagnoses(string id);
        Task<IEnumerable<Diagnose>> GetAllDiagnosess();
        Task<Diagnose> GetDiagnosesById(string id);
        Task UpdateDiagnoses(string id, UpdateDiagnoseCommand input);
        Task CreateFromExcel(IFormFile input);
    }
}