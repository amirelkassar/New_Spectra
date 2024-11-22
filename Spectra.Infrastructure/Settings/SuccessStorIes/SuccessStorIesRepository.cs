using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.Settings.SuccessStorIes;
using Spectra.Domain.Settings.SuccessStorIes;
using Spectra.Domain.Shared.Common.Exceptions;
using System.Linq.Expressions;

namespace Spectra.Infrastructure.Settings.SuccessStorIes
{
    public class SuccessStorIesRepository : ISuccessStorIesRepository
    {
        private readonly IMongoCollection<SuccessStory> _successStory;

        public SuccessStorIesRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _successStory = database.GetCollection<SuccessStory>("SuccessStorys");
        }
        public async Task<SuccessStory> GetByIdAsync(string id)
        {

            var entity = await _successStory.Find(c => c.Id == id).FirstOrDefaultAsync();
            if (entity == null)
            {
                throw new NotFoundException("SuccessStory", id);
            }
            return entity;
        }

        public async Task AddAsync(SuccessStory successStory)
        {
            await _successStory.InsertOneAsync(successStory);
        }

        public async Task UpdateAsync(SuccessStory successStory)
        {
            await _successStory.ReplaceOneAsync(c => c.Id == successStory.Id, successStory);
        }

        public async Task DeleteAsync(SuccessStory successStory)
        {
            await _successStory.DeleteOneAsync(c => c.Id == successStory.Id);
        }

        public async Task<IEnumerable<SuccessStory>> GetAllAsync(Expression<Func<SuccessStory, bool>> filter = null, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _successStory.Find(filter, options).ToListAsync();
        }
    }
}
