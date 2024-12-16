using System.Linq.Expressions;
using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Common;


namespace Spectra.Infrastructure.Repositories
{
    public class BaseMongoDbRepository<T> : IBaseMongoDbRepository<T> where T : BaseEntity<string>
    {
        private readonly IMongoCollection<T> _collection;
        public BaseMongoDbRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _collection = database.GetCollection<T>($"{typeof(T).Name}s");
        }
        public async Task AddAsync(T input)
        {
            await _collection.InsertOneAsync(input);
        }

        public async Task AddRangeAsync(IEnumerable<T> input)
        {
            await _collection.InsertManyAsync(input);
        }

        public async Task DeleteAsync(string id)
        {
            await _collection.DeleteOneAsync(i => i.Id == id);
        }

        public async Task<bool> Exists(Expression<Func<T, bool>> filter = null, FindOptions options = null)
        {
            return await _collection.Find(filter).AnyAsync();
        }

        public async Task<(IEnumerable<T> data, long total)> GetAllAsync(Expression<Func<T, bool>> filter = null,
            FindOptions options = null,
            int skipCount = 0,
            int maxCount = 100)
        {
            filter ??= _ => true;
            var query = _collection.Find(filter, options)
                .SortByDescending(s => s.Id)
                .Skip(skipCount)
                .Limit(maxCount);

            var total = await query.CountDocumentsAsync();
            var data=await query.ToListAsync();

            return (data, total);
        }

        public async Task<T> GetAsync(Expression<Func<T, bool>> filter = null)
        {
            var entity = await _collection.Find(filter).FirstOrDefaultAsync();
            return entity;
        }

        public async Task<T> GetByIdAsync(string id)
        {
            var entity = await _collection.Find(c => c.Id == id).FirstOrDefaultAsync();
            return entity;
        }

        public async Task<IMongoCollection<T>> GetCollectionAsync()
        {
            await Task.CompletedTask;
            return _collection;
        }

        public async Task UpdateAsync(T input)
        {

            await _collection.ReplaceOneAsync(i => i.Id == input.Id, input);
        }
    }
}
