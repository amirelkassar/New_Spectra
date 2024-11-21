using DocumentFormat.OpenXml.Office2010.Excel;
using MongoDB.Driver;
using Spectra.Application.Contracts.Repository;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Common.Exceptions;
using System.Diagnostics.Contracts;
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

        public async Task AddAsync(EmploymentContract EmploymentContract)
        {
            await _EmploymentContracts.InsertOneAsync(EmploymentContract);
        }

        public async Task DeleteAsync(string id)
        {
            await _EmploymentContracts.DeleteOneAsync(id);
        }

        public async Task<(ICollection<EmploymentContract> contracts, long total)> GetAllAsync(Expression<Func<EmploymentContract, bool>> filter = null,
            FindOptions options = null,
            int skipCount = 0,
            int maxCount = 100)
        {
            var filterDefinition = filter ?? (x => true);
            var query = await _EmploymentContracts
               .Find(filterDefinition, options)
               .SortByDescending(e => e.Created)
               .Skip(skipCount)
               .Limit(maxCount)
               .ToListAsync();

            var total = await _EmploymentContracts.CountDocumentsAsync(filterDefinition);
            var contracts = query;
            return (contracts , total);
        }

        public async Task<EmploymentContract> GetByIdAsync(string id)
        {

            var entity = await _EmploymentContracts.Find(c => c.Id == id).FirstOrDefaultAsync();
            if (entity == null)
            {
                throw new NotFoundException("Contract", id);
            }
            return entity;
        }

        public async Task<EmploymentContract> GetAsync(Expression<Func<EmploymentContract, bool>> filter)
        {
            var entity = await _EmploymentContracts.Find(filter).FirstOrDefaultAsync();
            return entity;
        }

        public async Task UpdateAsync(EmploymentContract input)
        {
            await _EmploymentContracts.ReplaceOneAsync(e => e.Id == input.Id, input);
        }
    }
}
