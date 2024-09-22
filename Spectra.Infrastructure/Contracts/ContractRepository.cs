using MongoDB.Driver;
using Spectra.Application.Contracts;
using Spectra.Application.Interfaces;
using Spectra.Domain.Contracts;
using System.Linq.Expressions;

namespace Spectra.Infrastructure.Contracts
{
    public class ContractRepository : IContractRepository
    {
        private readonly IMongoCollection<EmploymentContract> _EmploymentContracts;

        public ContractRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _EmploymentContracts = database.GetCollection<EmploymentContract>("EmploymentContracts");

        }
        public async Task<EmploymentContract> GetByIdAsync(string id)
        {
            return await _EmploymentContracts.Find(c => c.Id == id).FirstOrDefaultAsync();
        }

        public async Task AddAsync(EmploymentContract EmploymentContract)
        {
            await _EmploymentContracts.InsertOneAsync(EmploymentContract);
        }

        public async Task UpdateAsync(EmploymentContract EmploymentContract)
        {
            await _EmploymentContracts.ReplaceOneAsync(c => c.Id == EmploymentContract.Id, EmploymentContract);
        }

        public async Task DeleteAsync(EmploymentContract EmploymentContract)
        {
            await _EmploymentContracts.DeleteOneAsync(c => c.Id == EmploymentContract.Id);
        }

        public async Task<IEnumerable<EmploymentContract>> GetAllAsync(Expression<Func<EmploymentContract, bool>> filter = null, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _EmploymentContracts.Find(filter, options).ToListAsync();
        }
    }
}
