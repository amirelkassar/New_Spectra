using MongoDB.Driver;
using Spectra.Domain.MasterData.Sections;
using System.Linq.Expressions;

namespace Spectra.Application.MasterData.Sections
{
    public interface ISectionsRepository
    {
        Task AddAsync(Section section);
        Task DeleteAsync(Section section);
        Task<IEnumerable<Section>> GetAllAsync(Expression<Func<Section, bool>> filter = null, FindOptions options = null);
        Task<Section> GetByIdAsync(string id);
        Task UpdateAsync(Section section);
    }
}