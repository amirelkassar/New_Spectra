using MongoDB.Driver;
using System.Linq.Expressions;

namespace Spectra.Application.MasterData.SpecializationCommend
{
    public interface ISpecializationsRepository
    {
        Task AddAsync(Domain.MasterData.DoctorsSpecialization.Specialization Specializations);
        Task DeleteAsync(Domain.MasterData.DoctorsSpecialization.Specialization Specializations);
        Task<IEnumerable<Domain.MasterData.DoctorsSpecialization.Specialization>> GetAllAsync(Expression<Func<Domain.MasterData.DoctorsSpecialization.Specialization, bool>> filter = null, FindOptions options = null);
        Task<Domain.MasterData.DoctorsSpecialization.Specialization> GetByIdAsync(string id);
        Task<Domain.MasterData.DoctorsSpecialization.Specialization> GetByNameAsync(string name);
        Task UpdateAsync(Domain.MasterData.DoctorsSpecialization.Specialization Specializations);
    }
}