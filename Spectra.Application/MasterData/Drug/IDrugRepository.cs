using MongoDB.Driver;
using Spectra.Domain.MasterData.Drug;
using System.Linq.Expressions;

namespace Spectra.Application.MasterData.Drug
{
    public interface IDrugRepository
    {
        Task AddAsync(DrugMD Drugs);
        Task DeleteAsync(DrugMD Drugs);
        Task<IEnumerable<DrugMD>> GetAllAsync();
        Task<DrugMD> GetByIdAsync(string id);
        Task UpdateAsync(DrugMD Drugs);
    }
}