using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.Interfaces.IRepository;
using Spectra.Domain.Entities.States;

namespace Spectra.Infrastructure.Repositories
{
    public class StateRepository : IStateRepository
	{
		private readonly IMongoCollection<State> _states;

		public StateRepository(IMongoDbService mongoDbService)
		{
			_states = mongoDbService.DataBase.GetCollection<State>("States");
		}

		public async Task<IEnumerable<State>> GetByCountryIdAsync(string countryId)
		{
			return await _states.Find(s => s.CountryId == countryId).ToListAsync();
		}

		public async Task<State> GetByIdAsync(string id)
		{
			return await _states.Find(s => s.Id == id).FirstOrDefaultAsync();
		}

		public async Task AddAsync(State state)
		{
			await _states.InsertOneAsync(state);
		}

		public async Task<bool> ExistsAsync(string id)
		{
			var count = await _states.CountDocumentsAsync(s => s.Id == id);
			return count > 0;
		}
	}

}

