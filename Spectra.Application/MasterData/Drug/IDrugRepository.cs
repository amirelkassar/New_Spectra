using MongoDB.Driver;
using Spectra.Domain.MasterData.Drug;
using System.Linq.Expressions;

namespace Spectra.Application.MasterData.Drug
{
    public interface IDrugRepository
    {
        Task AddAsync(Domain.MasterData.Drug.Drug Drugs);
        Task DeleteAsync(Domain.MasterData.Drug.Drug Drugs);

        Task<IEnumerable<Domain.MasterData.Drug.Drug>> GetAllAsync(Expression<Func<Domain.MasterData.Drug.Drug, bool>> filter = null, FindOptions options = null);
        Task<Domain.MasterData.Drug.Drug> GetByIdAsync(string id);
        Task UpdateAsync(Domain.MasterData.Drug.Drug Drugs);
    }
}