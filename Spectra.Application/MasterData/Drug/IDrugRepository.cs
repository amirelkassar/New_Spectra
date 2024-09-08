using MongoDB.Driver;
using Spectra.Domain.MasterData.Drug;
using System.Linq.Expressions;

namespace Spectra.Application.MasterData.Drug
{
    public interface IDrugRepository
    {
        Task AddAsync(Drugs Drugs);
        Task DeleteAsync(Drugs Drugs);
        Task<IEnumerable<Drugs>> GetAllAsync();
        Task<Drugs> GetByIdAsync(string id);
        Task UpdateAsync(Drugs Drugs);
    }
}