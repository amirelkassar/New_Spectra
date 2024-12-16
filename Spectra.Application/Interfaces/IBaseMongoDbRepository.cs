using System.Linq.Expressions;
using MongoDB.Driver;
using Spectra.Domain.Shared.Common;

namespace Spectra.Application.Interfaces
{
    public interface IBaseMongoDbRepository<T> where T : BaseEntity<string>
    {
        Task<(IEnumerable<T> data, long total)> GetAllAsync(Expression<Func<T, bool>> filter = null,
            FindOptions options = null,
            int skipCount = 0,
            int maxCount = 100);

        Task<IQueryable<T>> GetQueryAsync(Expression<Func<T, bool>> filter = null);

        Task<bool> Exists(Expression<Func<T, bool>> filter = null, FindOptions options = null);
        Task<T> GetByIdAsync(string id);
        Task<T> GetAsync(Expression<Func<T, bool>> filter = null);
        Task AddAsync(T input);
        Task AddRangeAsync(IEnumerable<T> input);

        Task DeleteAsync(string id);
        Task UpdateAsync(T input);
    }
}
