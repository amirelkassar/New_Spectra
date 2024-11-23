using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.Drug.Commands;
using Spectra.Application.MasterData.Drug.Queries;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Drug.Services
{
    public interface IDrugService
    {
        Task<OperationResult> CreateDrug(CreateDrugCommand input);
        Task<OperationResult> CreateFromExcel(IFormFile input);
        Task<OperationResult> DeleteDrug(string id);
        Task<OperationResult> GetAllDrugNames(GetAllDrugNamesQuery input);
        Task<OperationResult> GetAllDrugs(GetAllDrugQuery input);
        Task<OperationResult> GetDrugById(string id);
        Task<OperationResult> UpdateDrug(UpdateDrugCommand input);
    }
}