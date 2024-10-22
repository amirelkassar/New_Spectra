using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.ServicesMD;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Enums;
using System.Linq.Expressions;

namespace Spectra.Infrastructure.MasterData.ServicesM
{
    public class ServiceMDRepository : IServiceMDRepository
    {

        private readonly IMongoCollection<MasterDataServices> _masterDataServices;

        public ServiceMDRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _masterDataServices = database.GetCollection<MasterDataServices>("MasterDataServices");
        }
        public async Task<MasterDataServices> GetByIdAsync(string id)
        {
           
            var entity = await _masterDataServices.Find(c => c.Id == id).FirstOrDefaultAsync();
            if (entity == null)
            {
                throw new NotFoundException("MasterDataServices", id);
            }
            return entity;
        }

        public async Task AddAsync(MasterDataServices masterDataServices)
        {
            await _masterDataServices.InsertOneAsync(masterDataServices);
        }

        public async Task UpdateAsync(MasterDataServices masterDataServices)
        {
            await _masterDataServices.ReplaceOneAsync(c => c.Id == masterDataServices.Id, masterDataServices);
        }

        public async Task DeleteAsync(MasterDataServices masterDataServices)
        {
            await _masterDataServices.DeleteOneAsync(c => c.Id == masterDataServices.Id);
        }

        public async Task<IEnumerable<MasterDataServices>> GetAllAsync(Expression<Func<MasterDataServices, bool>> filter = null, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _masterDataServices.Find(filter, options).ToListAsync();
        }
        public async Task<IEnumerable<MasterDataServices>> GetAllNameAndTermsAndConditions()
        {
            var filter = Builders<MasterDataServices>.Filter
        .Eq(x => x.AvailableSrvices, AvailableSrvice.ServicesView);

            var projection = Builders<MasterDataServices>.Projection
                .Include(x => x.Name)
                .Include(x => x.TermsAndConditions);

            var result = await _masterDataServices
                .Find(filter)
                .Project<MasterDataServices>(projection)
                .ToListAsync();

            return result;


        }
    }
}

