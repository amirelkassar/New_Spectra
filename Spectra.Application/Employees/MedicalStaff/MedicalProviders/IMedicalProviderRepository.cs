using MongoDB.Driver;
using Spectra.Application.Hellper;
using Spectra.Domain.Employees.MedicalStaff;
using System.Linq.Expressions;

namespace Spectra.Application.Employees.MedicalStaff.MedicalProviders
{
    public interface IMedicalProviderRepository
    {
        Task AddAsync(MedicalProvider MedicalProvider);
        Task DeleteAsync(MedicalProvider MedicalProvider);
        Task<IEnumerable<MedicalProvider>> GetAllAsync(Expression<Func<MedicalProvider, bool>> filter, FindOptions options = null);
        Task<PaginatedResult<MedicalProvider>> GetAllAsyncA(Expression<Func<MedicalProvider, bool>> filter = null, FindOptions options = null, int pageNumber = 1, int pageSize = 10);
        Task<MedicalProvider> GetByIdAsync(string id);
        Task UpdateAsync(MedicalProvider MedicalProvider);
        Task<UpdateResult> UpdateManyAsync(FilterDefinition<MedicalProvider> filter, UpdateDefinition<MedicalProvider> update);
    }
}