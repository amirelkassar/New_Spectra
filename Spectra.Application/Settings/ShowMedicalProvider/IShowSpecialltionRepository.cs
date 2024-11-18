using MongoDB.Driver;
using Spectra.Domain.Settings.MedicalSpecialties;
using System.Linq.Expressions;

namespace Spectra.Application.Settings.ShowMedicalProvider
{
    public interface IShowSpecialltionRepository
    {
        Task AddAsync(ShowSpecialltions showSpecialltion);
        Task DeleteAsync(ShowSpecialltions showSpecialltion);
        Task<IEnumerable<ShowSpecialltions>> GetAllAsync(Expression<Func<ShowSpecialltions, bool>> filter = null, FindOptions options = null);
        Task<ShowSpecialltions> GetByIdAsync(string id);
        Task UpdateAsync(ShowSpecialltions showSpecialltion);
    }
}