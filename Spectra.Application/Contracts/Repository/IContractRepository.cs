using MongoDB.Driver;
using Spectra.Application.Hellper;
using Spectra.Domain.Contracts;
using System.Linq.Expressions;

namespace Spectra.Application.Contracts.Repository
{
    public interface IContractRepository
    {
        Task AddAsync(EmploymentContract EmploymentContract);
        Task DeleteAsync(string id);
        Task<PaginatedResult<EmploymentContract>> GetAllAsync(Expression<Func<EmploymentContract, bool>> filter = null,
            FindOptions options = null,
            int pageNumber = 1,
            int pageSize = 100);
        Task<EmploymentContract> GetByIdAsync(string id);
        Task UpdateAsync(EmploymentContract EmploymentContract);
        Task<EmploymentContract> GetAsync(Expression<Func<EmploymentContract, bool>> filter);

    }
}