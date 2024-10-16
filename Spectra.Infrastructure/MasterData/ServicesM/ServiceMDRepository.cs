using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.ServicesMD;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Enums;
using Spectra.Infrastructure.MasterData.ServicesMD;
using System.Linq.Expressions;

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

        public async Task<IEnumerable<MasterDataServices>> GetAllAsync(Expression<Func<MasterDataServices, bool>> filter = null, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _medicalTestsAndXrays.Find(filter, options).ToListAsync();
        }
        public async Task<IEnumerable<MasterDataServices>> GetAllNameAndTermsAndConditions()
        {
            var filter = Builders<MasterDataServices>.Filter
        .Eq(x => x.AvailableSrvices, AvailableSrvice.ServicesView);  

            var projection = Builders<MasterDataServices>.Projection
                .Include(x => x.Name)  
                .Include(x => x.TermsAndConditions);  

            var result = await _medicalTestsAndXrays
                .Find(filter)
                .Project<MasterDataServices>(projection)  
                .ToListAsync();

            return result;

           
        }
    }
}

