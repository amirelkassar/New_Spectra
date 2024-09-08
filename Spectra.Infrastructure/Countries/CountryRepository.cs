using MongoDB.Driver;
using Spectra.Application.Countries;
using Spectra.Application.Interfaces;
using Spectra.Domain.Countries;
using System.Linq.Expressions;

namespace Spectra.Infrastructure.Countries
{
    public class CountryRepository : ICountryRepository
    {
        private readonly IMongoCollection<Country> _countries;

        public CountryRepository(IMongoDbService mongoDbService)
        {
            _countries = mongoDbService.DataBase.GetCollection<Country>(Conses.CollectionName);
        }

        public async Task<IEnumerable<Country>> GetAllAsync(Expression<Func<Country, bool>>? filter = null)
        {
            filter ??= _ => true;
            return await _countries.Find(filter).ToListAsync();
        }

        public async Task<Country> GetByIdAsync(string id)
        {
            return await _countries.Find(c => c.Id == id).FirstOrDefaultAsync();
        }

        public async Task AddAsync(Country country)
        {
            await _countries.InsertOneAsync(country);
        }

        public async Task<bool> ExistsAsync(string id)
        {
            var count = await _countries.FindAsync(c => c.Id == id);
            return count != null;
        }

        public async Task<bool> AnyAsync()
        {
            var count = await _countries.CountDocumentsAsync(_ => true);
            return count > 0;
        }

        public async Task AddManyAsync(params Country[] countries)
        {
            await _countries.InsertManyAsync(countries);
        }

        public async Task DeleteAsync(string id)
        {
            await _countries.DeleteOneAsync(c => c.Id == id);
        }
    }
}
