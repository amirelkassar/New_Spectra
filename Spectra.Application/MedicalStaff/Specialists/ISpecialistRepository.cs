using MongoDB.Driver;
using Spectra.Domain.MedicalStaff.Specialists;
using System.Linq.Expressions;

namespace Spectra.Application.MedicalStaff.Specialists
{
    public interface ISpecialistRepository
    {
        Task AddAsync(Specialist specialist);
        Task DeleteAsync(Specialist specialist);
        Task<IEnumerable<Specialist>> GetAllAsync(Expression<Func<Specialist, bool>> filter = null, FindOptions options = null);
        Task<Specialist> GetByIdAsync(string id);
        Task UpdateAsync(Specialist specialist);
    }
}