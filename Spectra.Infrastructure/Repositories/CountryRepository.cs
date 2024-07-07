using MongoDB.Bson.Serialization;
using MongoDB.Driver;
using Spectra.Application.Countries;
using Spectra.Application.Interfaces;
using Spectra.Domain.Countries;
using Spectra.Domain.Countries.States;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.Repositories
{
    public class CountryRepository : ICountryRepository
	{
		private readonly IMongoCollection<Country> _countries;

		public CountryRepository(IMongoDbService mongoDbService)
		{
			_countries = mongoDbService.DataBase.GetCollection<Country>("Countries");
		}

		public async Task<IEnumerable<Country>> GetAllAsync()
		{
			return await _countries.Find(_ => true).ToListAsync();
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
			var count = await _countries.CountDocumentsAsync(c => c.Id == id);
			return count > 0;
		}

		public async  Task<State> GetStateByIdAsync(string stateId)
		{
			var filter = Builders<Country>.Filter.ElemMatch(c => c.States, s => s.Id == stateId);
			var projection = Builders<Country>.Projection
				.ElemMatch(c => c.States, s => s.Id == stateId);

			var result = await _countries.Find(filter).Project(projection).FirstOrDefaultAsync();

			if (result == null) return null;

			var stateBson = result["States"].AsBsonArray.FirstOrDefault();
			return stateBson == null ? null : BsonSerializer.Deserialize<State>(stateBson.AsBsonDocument);
		}

		public async Task<bool> AnyCountriesAsync()
		{
			var count = await _countries.CountDocumentsAsync(_ => true);
			return count > 0;
		}
	}
}
