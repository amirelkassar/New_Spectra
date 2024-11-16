using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.Settings.ShowMedicalProvider;
using Spectra.Domain.Settings.MedicalSpecialties;
using Spectra.Domain.Shared.Common.Exceptions;
using System.Linq.Expressions;

namespace Spectra.Infrastructure.Settings.showSpecialltionies
{
    public class ShowSpecialltionRepository : IShowSpecialltionRepository
    {
        private readonly IMongoCollection<ShowSpecialltions> _showSpecialltions;

        public ShowSpecialltionRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _showSpecialltions = database.GetCollection<ShowSpecialltions>("ShowSpecialltion");
        }
        public async Task<ShowSpecialltions> GetByIdAsync(string id)
        {

            var entity = await _showSpecialltions.Find(c => c.Id == id).FirstOrDefaultAsync();
            if (entity == null)
            {
                throw new NotFoundException("ShowSpecialltion", id);
            }
            return entity;
        }

        public async Task AddAsync(ShowSpecialltions showSpecialltion)
        {
            await _showSpecialltions.InsertOneAsync(showSpecialltion);
        }

        public async Task UpdateAsync(ShowSpecialltions showSpecialltion)
        {
            await _showSpecialltions.ReplaceOneAsync(c => c.Id == showSpecialltion.Id, showSpecialltion);
        }

        public async Task DeleteAsync(ShowSpecialltions showSpecialltion)
        {
            await _showSpecialltions.DeleteOneAsync(c => c.Id == showSpecialltion.Id);
        }

        public async Task<IEnumerable<ShowSpecialltions>> GetAllAsync(Expression<Func<ShowSpecialltions, bool>> filter = null, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _showSpecialltions.Find(filter, options).ToListAsync();
        }
    }
}
