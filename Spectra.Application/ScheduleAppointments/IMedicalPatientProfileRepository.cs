using MongoDB.Driver;
using Spectra.Application.Hellper;
using Spectra.Domain.MedicalPatientProfiles;
using System.Linq.Expressions;

namespace Spectra.Infrastructure.MedicalPatientProfiles
{
    public interface IMedicalPatientProfileRepository
    {
        Task AddAsync(MedicalPatientProfile medicalPatientProfile);
        Task DeleteAsync(MedicalPatientProfile medicalPatientProfile);
        Task<IEnumerable<MedicalPatientProfile>> GetAllAsync(Expression<Func<MedicalPatientProfile, bool>> filter, FindOptions options = null);
        Task<PaginatedResult<MedicalPatientProfile>> GetAllAsyncA(Expression<Func<MedicalPatientProfile, bool>> filter = null, FindOptions options = null, int pageNumber = 1, int pageSize = 10);
        Task<MedicalPatientProfile> GetByIdAsync(string id);
        Task UpdateAsync(MedicalPatientProfile medicalPatientProfile);
        Task<UpdateResult> UpdateManyAsync(FilterDefinition<MedicalPatientProfile> filter, UpdateDefinition<MedicalPatientProfile> update);
    }
}