using MongoDB.Driver;

using Spectra.Application.Contracts.Repository;
using Spectra.Application.Interfaces;
using Spectra.Domain.Contracts;
using System.Linq.Expressions;

namespace Spectra.Infrastructure.Contracts.SubContracts
{
    public class SubContractRepository : ISubContractRepository
    {
        private readonly IMongoCollection<SubContract> _subContracts;

        public SubContractRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _subContracts = database.GetCollection<SubContract>("SubContracts");

        }
        public async Task<SubContract> GetByIdAsync(string id)
        {
            return await _subContracts.Find(c => c.SubContractId == id).FirstOrDefaultAsync();
        }

        public async Task AddAsync(SubContract subContract)
        {
            await _subContracts.InsertOneAsync(subContract);
        }

        public async Task UpdateAsync(SubContract subContract)
        {
            await _subContracts.ReplaceOneAsync(c => c.SubContractId == subContract.SubContractId, subContract);
        }

        public async Task DeleteAsync(SubContract subContract)
        {
            await _subContracts.DeleteOneAsync(c => c.SubContractId == subContract.SubContractId);
        }

        public async Task<IEnumerable<SubContract>> GetAllAsync(Expression<Func<SubContract, bool>> filter = null, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _subContracts.Find(filter, options).ToListAsync();
        }
    }
}
