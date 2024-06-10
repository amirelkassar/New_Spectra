using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.Interfaces.IRepository;
using Spectra.Domain.Entities.Countries;
using Spectra.Domain.Entities.States;
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

		public Task<State> GetStateByIdAsync(string stateId)
		{
			throw new NotImplementedException();
		}
	}
}
