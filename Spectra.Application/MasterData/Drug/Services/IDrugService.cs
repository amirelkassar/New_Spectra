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
        Task<OperationResult<IEnumerable<BaseMasterDataDto>>> GetAllDrugNames();
        Task<OperationResult<IEnumerable<Domain.MasterData.Drug.Drug>>> GetAllDrugs();
        Task<OperationResult<IEnumerable<BaseMasterDataDto>>> GetAllDrugsNames();
        Task<OperationResult<Domain.MasterData.Drug.Drug>> GetDrugById(string id);
        Task<OperationResult<Unit>> UpdateDrug(string id, UpdateDrugCommand input);
    }
}