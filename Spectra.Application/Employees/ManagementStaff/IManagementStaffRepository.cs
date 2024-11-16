using MongoDB.Driver;
using Spectra.Domain.Employees.ManagementStaff;
using System.Linq.Expressions;

namespace Spectra.Application.Employees.ManagementStaff
{
    public interface IManagementStaffRepository
    {

        Task AddAsync(Staff staff);
        Task DeleteAsync(Staff staff);
        Task<IEnumerable<Staff>> GetAllAsync(Expression<Func<Staff, bool>> filter = null, FindOptions options = null);
        Task<Staff> GetByIdAsync(string id);
        Task UpdateAsync(Staff staff);
        Task<UpdateResult> UpdateManyAsync(FilterDefinition<Staff> filter, UpdateDefinition<Staff> update);
    }
}