using MongoDB.Driver;
using Spectra.Domain.Contracts;
using System.Linq.Expressions;

namespace Spectra.Application.Contracts.Repository
{
    public interface ISubContractRepository
    {
        Task AddAsync(SubContract subContract);
        Task DeleteAsync(SubContract subContract);
        Task<IEnumerable<SubContract>> GetAllAsync(Expression<Func<SubContract, bool>> filter = null, FindOptions options = null);
        Task<SubContract> GetByIdAsync(string id);
        Task UpdateAsync(SubContract subContract);

    }
}