using MongoDB.Driver;
using Spectra.Domain.Employees;
using System.Linq.Expressions;

namespace Spectra.Application.Employees.MedicalStaff.MedicalProviders
{
    public interface IMedicalProviderRepository
    {
        Task AddAsync(Employee input);
        Task DeleteAsync(Employee input);
        Task<(IEnumerable<Employee> data, long total)> GetAllAsync(Expression<Func<Employee, bool>> filter = null,
            FindOptions options = null,
            int skipCount = 0,
            int maxCount = 100);
        Task<bool> Exists(Expression<Func<Employee, bool>> filter = null, FindOptions options = null);

        Task<Employee> GetByIdAsync(string id);
        Task UpdateAsync(Employee input);
        Task<UpdateResult> UpdateManyAsync(FilterDefinition<Employee> filter, UpdateDefinition<Employee> update);
    }
}