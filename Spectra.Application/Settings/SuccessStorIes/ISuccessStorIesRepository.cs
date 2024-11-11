using MongoDB.Driver;
using Spectra.Domain.Settings.SuccessStorIes;
using System.Linq.Expressions;

namespace Spectra.Application.Settings.SuccessStorIes
{
    public interface ISuccessStorIesRepository
    {
        Task AddAsync(SuccessStory successStory);
        Task DeleteAsync(SuccessStory successStory);
        Task<IEnumerable<SuccessStory>> GetAllAsync(Expression<Func<SuccessStory, bool>> filter = null, FindOptions options = null);
        Task<SuccessStory> GetByIdAsync(string id);
        Task UpdateAsync(SuccessStory successStory);
    }
}