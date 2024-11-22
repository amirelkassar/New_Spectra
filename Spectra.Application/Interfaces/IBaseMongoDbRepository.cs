using MongoDB.Driver;
using Spectra.Domain.Shared.Common;
using System.Linq.Expressions;

namespace Spectra.Application.Interfaces
{
    public interface IBaseMongoDbRepository<T, Tkey> where T : BaseEntity<Tkey>
    {
        Task<(IEnumerable<T> data, long total)> GetAllAsync(Expression<Func<T, bool>> filter = null,
            FindOptions options = null,
            int skipCount = 0,
            int maxCount = 100);
        Task<bool> Exists(Expression<Func<T, bool>> filter = null, FindOptions options = null);
        Task<T> GetByIdAsync(Tkey id);
        Task<T> GetAsync(Expression<Func<T, bool>> filter = null);
        Task AddAsync(T input);
        Task AddRangeAsync(IEnumerable<T> input);

        Task DeleteAsync(Tkey id);
        Task UpdateAsync(T input);
    }
}
