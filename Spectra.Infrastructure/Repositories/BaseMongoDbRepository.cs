using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Common;
using System.Linq.Expressions;


namespace Spectra.Infrastructure.Repositories
{
    public class BaseMongoDbRepository<T> : IBaseMongoDbRepository<T, string> where T : BaseEntity<string>
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

        public async Task<(IEnumerable<T> data, long total)> GetAllAsync(Expression<Func<T, bool>> filter = null, FindOptions options = null, int skipCount = 0, int maxCount = 100)
        {
            filter ??= _ => true;
            var data = await _collection.Find(filter, options)
                .SortByDescending(s => s.Id)
                .Skip(skipCount)
                .Limit(maxCount)
                .ToListAsync();
            var total = await _collection.Find(filter, options).CountDocumentsAsync();
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

        public async Task UpdateAsync(T input)
        {
            var props = typeof(T).GetProperties();
            var obj = Builders<T>.Update.Set(nameof(input.Id), input.Id);
            foreach (var prop in props)
            {
                obj.Set(prop.Name, prop.GetValue(input));
            }

            await _collection.UpdateOneAsync(m => m.Id == input.Id, obj);
        }
    }
}
