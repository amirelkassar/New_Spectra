using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.Interfaces.IRepository;
using Spectra.Domain.Entities;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.Repositories
{
	public class CityRepository : ICityRepository
	{
		private readonly IMongoCollection<City> _cities;

		public CityRepository(IMongoDbService mongoDbService)
		{
			_cities = mongoDbService.DataBase.GetCollection<City>("Cities");
		}

		public async Task<IEnumerable<City>> GetByStateIdAsync(string stateId)
		{
			return await _cities.Find(c => c.StateId == stateId).ToListAsync();
		}

		public async Task<City> GetByIdAsync(string id)
		{
			return await _cities.Find(c => c.Id == id).FirstOrDefaultAsync();
		}

		public async Task AddAsync(City city)
		{
			await _cities.InsertOneAsync(city);
		}

		public async Task<bool> ExistsAsync(string id)
		{
			var count = await _cities.CountDocumentsAsync(c => c.Id == id);
			return count > 0;
		}
	}

}
