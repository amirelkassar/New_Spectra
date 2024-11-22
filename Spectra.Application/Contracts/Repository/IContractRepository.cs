using MongoDB.Driver;
using Spectra.Domain.Contracts;
using System.Linq.Expressions;

namespace Spectra.Application.Contracts.Repository
{
    public interface IContractRepository
    {
        Task AddAsync(EmploymentContract EmploymentContract);
        Task DeleteAsync(string id);
        Task<(ICollection<EmploymentContract> contracts, long total)> GetAllAsync(Expression<Func<EmploymentContract, bool>> filter = null,
            FindOptions options = null,
            int skipCount = 0,
            int maxCount = 100);
        Task<EmploymentContract> GetByIdAsync(string id);
        Task UpdateAsync(EmploymentContract EmploymentContract);
        Task<EmploymentContract> GetAsync(Expression<Func<EmploymentContract, bool>> filter);

    }
}