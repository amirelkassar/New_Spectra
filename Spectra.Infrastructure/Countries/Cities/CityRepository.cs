using MongoDB.Driver;
using Spectra.Application.Countries.Cities;
using Spectra.Application.Interfaces;
using Spectra.Domain.Countries.Cities;

namespace Spectra.Infrastructure.Countries.Cities
{
    internal class CityRepository : ICityRepository
    {
        IMongoCollection<City> _cities;
        public CityRepository(IMongoDbService mongoDbService)
        {
            _cities=mongoDbService.DataBase.GetCollection<City>(Conses.CollectionName);
        }
        public async Task AddAsync(City city)
        {
            await _cities.InsertOneAsync(city);
        }

        public async Task AddManyAsync(params City[] states)
        {
           await _cities.InsertManyAsync(states);
        }

        public async Task<bool> ExistsAsync(string id)
        {
            var count = await _cities.FindAsync(c => c.Id == id);
            return count != null;
        }

        public async Task<City> GetByIdAsync(string id)
        {
            return await _cities.Find(s => s.Id == id).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<City>> GetByStateIdAsync(string stateId)
        {
            return await _cities.Find(c=>c.StateId == stateId).ToListAsync();
        }
    }
}
