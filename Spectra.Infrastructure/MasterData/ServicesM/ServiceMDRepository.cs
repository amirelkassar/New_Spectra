using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.ServicesMD;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common.Exceptions;
using System.Linq.Expressions;

namespace Spectra.Infrastructure.MasterData.ServicesM
{
    public class ServiceMDRepository : IServiceMDRepository
    {

        private readonly IMongoCollection<PlatformService> _masterDataServices;

        public ServiceMDRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _masterDataServices = database.GetCollection<PlatformService>("PlatformServices");
        }
        public async Task<PlatformService> GetByIdAsync(string id)
        {

            var entity = await _masterDataServices.Find(c => c.Id == id).FirstOrDefaultAsync();
            if (entity == null)
            {
                throw new NotFoundException("MasterDataServices", id);
            }
            return entity;
        }

        public async Task AddAsync(PlatformService masterDataServices)
        {
            await _masterDataServices.InsertOneAsync(masterDataServices);
        }

        public async Task UpdateAsync(PlatformService masterDataServices)
        {
            await _masterDataServices.ReplaceOneAsync(c => c.Id == masterDataServices.Id, masterDataServices);
        }

        public async Task DeleteAsync(PlatformService masterDataServices)
        {
            await _masterDataServices.DeleteOneAsync(c => c.Id == masterDataServices.Id);
        }

        public async Task<IEnumerable<PlatformService>> GetAllAsync(Expression<Func<PlatformService, bool>> filter = null, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _masterDataServices.Find(filter, options).ToListAsync();
        }
    }
}

