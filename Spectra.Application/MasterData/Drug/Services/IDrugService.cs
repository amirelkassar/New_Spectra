using Spectra.Application.MasterData.Drug.Commands;
using Spectra.Domain.MasterData.Drug;

namespace Spectra.Application.MasterData.Drug.Services
{
    public interface IDrugService
    {
        Task<string> CreateDrug(CreateDrugCommand input);
        Task DeleteDrug(string id);
        Task<IEnumerable<Drugs>> GetAllDrugs();
        Task<Drugs> GetDrugById(string id);
        Task UpdateDrug(string id, UpdateDrugCommand input);

    }
}