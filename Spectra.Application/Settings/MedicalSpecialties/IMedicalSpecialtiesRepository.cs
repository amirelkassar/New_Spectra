using System.Linq.Expressions;
using MongoDB.Driver;
using Spectra.Domain.Settings.MedicalSpecialties;

namespace Spectra.Application.Settings.MedicalSpecialties
{
    public interface IMedicalSpecialtiesRepository
    {
        Task AddAsync(MedicalSpecialt medicalSpecialt);
        Task DeleteAsync(MedicalSpecialt medicalSpecialt);
        Task<IEnumerable<MedicalSpecialt>> GetAllAsync(Expression<Func<MedicalSpecialt, bool>> filter = null, FindOptions options = null);
        Task<MedicalSpecialt> GetByIdAsync(string id);
        Task UpdateAsync(MedicalSpecialt medicalSpecialt);
    }
}