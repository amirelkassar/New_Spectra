using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Infrastructure.MasterData.ServicesMD;

namespace Spectra.Infrastructure.MasterData.ServicesM
{
    public class ServiceMDRepository : IServiceMDRepository
    {

        private readonly IMongoCollection<MasterDataServices> _medicalTestsAndXrays;

        public ServiceMDRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _medicalTestsAndXrays = database.GetCollection<MasterDataServices>("MasterDataServices");
        }
        public async Task<MasterDataServices> GetByIdAsync(string id)
        {
            return await _medicalTestsAndXrays.Find(c => c.Id == id).FirstOrDefaultAsync();
        }

        public async Task AddAsync(MasterDataServices masterDataServices)
        {
            await _medicalTestsAndXrays.InsertOneAsync(masterDataServices);
        }

        public async Task UpdateAsync(MasterDataServices masterDataServices)
        {
            await _medicalTestsAndXrays.ReplaceOneAsync(c => c.Id == masterDataServices.Id, masterDataServices);
        }

        public async Task DeleteAsync(MasterDataServices masterDataServices)
        {
            await _medicalTestsAndXrays.DeleteOneAsync(c => c.Id == masterDataServices.Id);
        }

        public async Task<IEnumerable<MasterDataServices>> GetAllAsync()
        {

            return await _medicalTestsAndXrays.Find(p => true).ToListAsync();
        }
    }
}

