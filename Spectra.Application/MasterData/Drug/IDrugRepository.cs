using MongoDB.Driver;
using Spectra.Domain.MasterData.Drug;
using System.Linq.Expressions;

namespace Spectra.Application.MasterData.Drug
{
    public interface IDrugRepository
    {
        Task AddAsync(DrugMD Drugs);
        Task DeleteAsync(DrugMD Drugs);

        Task<IEnumerable<DrugMD>> GetAllAsync(Expression<Func<DrugMD, bool>> filter = null, FindOptions options = null);
        Task<DrugMD> GetByIdAsync(string id);
        Task UpdateAsync(DrugMD Drugs);
    }
}