using MongoDB.Driver;
using Spectra.Application.Contracts.Repository;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Common.Exceptions;
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

            var entity = await _EmploymentContracts.Find(c => c.Id == id).FirstOrDefaultAsync();
            if (entity == null)
            {
                throw new NotFoundException("Contract", id);
            }
            return entity;
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

        public async Task<IEnumerable<EmploymentContract>> GetAllAsync(
    Expression<Func<EmploymentContract, bool>> filter,
    FindOptions options
  )
        {
            filter ??= _ => true;

            return await _EmploymentContracts.Find(filter, options).ToListAsync();
        }
        public async Task<PaginatedResult<EmploymentContract>> GetAllAsyncP(
   Expression<Func<EmploymentContract, bool>> filter = null,
   FindOptions options = null,
   int pageNumber = 1,
   int pageSize = 10)
        {
     
            var filterDefinition = filter ?? (x => true);

           
            var query = await _EmploymentContracts
                .Find(filterDefinition, options)
                //.SortByDescending(x => x.) // Sort by Daysdate in descending order
                .Skip((pageNumber - 1) * pageSize) // Skip to the correct page
                .Limit(pageSize).ToListAsync();                  // Limit results to pageSize


            var totalCount = await _EmploymentContracts.CountDocumentsAsync(filterDefinition);

            return new PaginatedResult<EmploymentContract>
            {
                Items = query,
                TotalCount = (int)totalCount,
                PageNumber = pageNumber,
                PageSize = pageSize
            };
        }
    }
}
