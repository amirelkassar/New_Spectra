using MongoDB.Driver;
using Spectra.Domain.Contracts;
using System.Linq.Expressions;

namespace Spectra.Application.Contracts
{
    public interface IContractRepository
    {
        Task AddAsync(EmploymentContract EmploymentContract);
        Task DeleteAsync(EmploymentContract EmploymentContract);
        Task<IEnumerable<EmploymentContract>> GetAllAsync(Expression<Func<EmploymentContract, bool>> filter = null, FindOptions options = null);
        Task<EmploymentContract> GetByIdAsync(string id);
        Task UpdateAsync(EmploymentContract EmploymentContract);
    }
}