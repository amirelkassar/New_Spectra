using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.Drug;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.Shared.Common.Exceptions;
using System.Linq.Expressions;

namespace Spectra.Infrastructure.MasterData.Drug
{
    public class DrugRepository : IDrugRepository
    {
        private readonly IMongoCollection<Domain.MasterData.Drug.Drug> _Drug;

        public DrugRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _Drug = database.GetCollection<Drug>("Drugs");
        }
        public async Task<Domain.MasterData.Drug.Drug> GetByIdAsync(string id)
        {

            var entity = await _Drug.Find(c => c.Id == id).FirstOrDefaultAsync();
            if (entity == null)
            {
                throw new NotFoundException("Doctor", id);
            }
            return entity;
        }

        public async Task AddAsync(Domain.MasterData.Drug.Drug Drug)
        {
            await _Drug.InsertOneAsync(Drug);
        }

        public async Task UpdateAsync(Domain.MasterData.Drug.Drug Drug)
        {
            await _Drug.ReplaceOneAsync(c => c.Id == Drug.Id, Drug);
        }

        public async Task DeleteAsync(Domain.MasterData.Drug.Drug Drug)
        {
            await _Drug.DeleteOneAsync(c => c.Id == Drug.Id);
        }

        public async Task<IEnumerable<Domain.MasterData.Drug.Drug>> GetAllAsync(Expression<Func<Domain.MasterData.Drug.Drug, bool>> filter = null, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _Drug.Find(filter, options).ToListAsync();
        }
    }
}
