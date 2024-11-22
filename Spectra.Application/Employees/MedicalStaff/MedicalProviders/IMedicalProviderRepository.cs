using MongoDB.Driver;
using Spectra.Domain.Employees.MedicalStaff;
using System.Linq.Expressions;

namespace Spectra.Application.Employees.MedicalStaff.MedicalProviders
{
    public interface IMedicalProviderRepository
    {
        Task AddAsync(MedicalProvider input);
        Task DeleteAsync(MedicalProvider input);
        Task<(IEnumerable<MedicalProvider> data, long total)> GetAllAsync(Expression<Func<MedicalProvider, bool>> filter = null,
            FindOptions options = null,
            int skipCount = 0,
            int maxCount = 100);
        Task<bool> Exists(Expression<Func<MedicalProvider, bool>> filter = null, FindOptions options = null);

        Task<MedicalProvider> GetByIdAsync(string id);
        Task UpdateAsync(MedicalProvider input);
        Task<UpdateResult> UpdateManyAsync(FilterDefinition<MedicalProvider> filter, UpdateDefinition<MedicalProvider> update);
    }
}