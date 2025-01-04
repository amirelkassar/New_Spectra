using System.Linq.Expressions;
using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.Sections;
using Spectra.Domain.MasterData.Sections;
using Spectra.Domain.Shared.Common.Exceptions;

namespace Spectra.Infrastructure.MasterData.sections
{
    public class SectionsRepository : ISectionsRepository
    {
        private readonly IMongoCollection<Section> _section;

        public SectionsRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _section = database.GetCollection<Section>("Sections");
        }
        public async Task<Section> GetByIdAsync(string id)
        {

            var entity = await _section.Find(c => c.Id == id).FirstOrDefaultAsync();
            if (entity == null)
            {
                throw new NotFoundException("Doctor", id);
            }
            return entity;
        }

        public async Task AddAsync(Section section)
        {
            await _section.InsertOneAsync(section);
        }

        public async Task UpdateAsync(Section section)
        {
            await _section.ReplaceOneAsync(c => c.Id == section.Id, section);
        }

        public async Task DeleteAsync(Section section)
        {
            await _section.DeleteOneAsync(c => c.Id == section.Id);
        }

        public async Task<IEnumerable<Section>> GetAllAsync(Expression<Func<Section, bool>> filter = null, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _section.Find(filter, options).ToListAsync();
        }
    }
}
