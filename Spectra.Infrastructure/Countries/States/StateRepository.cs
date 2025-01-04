using MongoDB.Driver;
using Spectra.Application.Countries.States;
using Spectra.Application.Interfaces;
using Spectra.Domain.Countries.States;

namespace Spectra.Infrastructure.Countries.States
{
    internal class StateRepository : IStateRepository
    {
        IMongoCollection<State> _states;
        public StateRepository(IMongoDbService mongoDbService)
        {
            _states = mongoDbService.DataBase.GetCollection<State>(Conses.CollectionName);
        }
        public async Task AddAsync(State state)
        {
            await _states.InsertOneAsync(state);
        }

        public async Task AddManyAsync(params State[] states)
        {
            await _states.InsertManyAsync(states);
        }

        public async Task<bool> AnyAsync()
        {
            var count = await _states.CountDocumentsAsync(_ => true);
            return count > 0;
        }

        public async Task<bool> ExistsAsync(string id)
        {
            var count = await _states.FindAsync(c => c.Id == id);
            return count != null;
        }

        public async Task<IEnumerable<State>> GetByCountryIdAsync(string countryId)
        {
            return await _states.Find(s => s.CountryId == countryId).ToListAsync();
        }

        public async Task<State> GetByIdAsync(string id)
        {
            return await _states.Find(s => s.Id == id).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<State>> GetListAsync()
        {
            return await _states.Find(_ => true).ToListAsync();
        }
    }
}
