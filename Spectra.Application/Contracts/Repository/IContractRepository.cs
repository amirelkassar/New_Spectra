using MongoDB.Driver;
using Spectra.Application.Hellper;
using Spectra.Domain.Contracts;
using System.Linq.Expressions;

namespace Spectra.Application.Contracts.Repository
{
    public interface IContractRepository
    {
        Task AddAsync(EmploymentContract EmploymentContract);
        Task DeleteAsync(EmploymentContract EmploymentContract);
        Task<IEnumerable<EmploymentContract>> GetAllAsync(Expression<Func<EmploymentContract, bool>> filter, FindOptions options);
        Task<PaginatedResult<EmploymentContract>> GetAllAsyncP(Expression<Func<EmploymentContract, bool>> filter = null, FindOptions options = null, int pageNumber = 1, int pageSize = 10);
        Task<EmploymentContract> GetByIdAsync(string id);
        Task UpdateAsync(EmploymentContract EmploymentContract);

    }
}