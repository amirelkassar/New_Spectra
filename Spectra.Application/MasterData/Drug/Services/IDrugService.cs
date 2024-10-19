using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.Drug.Commands;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Drug.Services
{
    public interface IDrugService
    {
        Task<OperationResult<string>> CreateDrug(CreateDrugCommand input);
        Task CreateFromExcel(IFormFile input);
        Task<OperationResult<Unit>> DeleteDrug(string id);
        Task<OperationResult<IEnumerable<BassMasterDataDto>>> GetAllDrugNames();
        Task<OperationResult<IEnumerable<DrugMD>>> GetAllDrugs();
        Task<OperationResult<IEnumerable<BassMasterDataDto>>> GetAllDrugsNames();
        Task<OperationResult<DrugMD>> GetDrugById(string id);
        Task<OperationResult<Unit>> UpdateDrug(string id, UpdateDrugCommand input);
    }
}