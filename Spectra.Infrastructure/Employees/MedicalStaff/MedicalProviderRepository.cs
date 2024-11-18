using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.Employees.MedicalStaff;
using Spectra.Domain.Shared.Common.Exceptions;
using System.Linq.Expressions;

namespace Spectra.Infrastructure.Employees.MedicalStaff.MedicalProviders
{
    public class MedicalProviderRepository : IMedicalProviderRepository
    {
        private readonly IMongoCollection<MedicalProvider> _MedicalProviders;

        public MedicalProviderRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;

            _MedicalProviders = database.GetCollection<MedicalProvider>("MedicalProviders");

        }
        public async Task<PaginatedResult<MedicalProvider>> GetAllAsyncA(
     Expression<Func<MedicalProvider, bool>> filter = null,
     FindOptions options = null,
     int pageNumber = 1,
     int pageSize = 10)
        {
            // Use AsQueryable to get an IMongoQueryable<MedicalProvider>
            var filterDefinition = filter ?? (x => true);

            // Use MongoDB's sorting and pagination
            var query = await _MedicalProviders
                .Find(filterDefinition, options)
                //.SortByDescending(x => x.) // Sort by Daysdate in descending order
                .Skip((pageNumber - 1) * pageSize) // Skip to the correct page
                .Limit(pageSize).ToListAsync();                  // Limit results to pageSize


            var totalCount = await _MedicalProviders.CountDocumentsAsync(filterDefinition);

            return new PaginatedResult<MedicalProvider>
            {
                Items = query,
                TotalCount = (int)totalCount,
                PageNumber = pageNumber,
                PageSize = pageSize
            };
        }
        public async Task<MedicalProvider> GetByIdAsync(string id)
        {

            var entity = await _MedicalProviders.Find(c => c.Id == id).FirstOrDefaultAsync();
            if (entity == null)
            {
                throw new NotFoundException("MedicalProvider", id);
            }
            return entity;
        }  
        
        public async Task<MedicalProvider> GetByIdentityIdAsync(string id)
        {

            var entity = await _MedicalProviders.Find(c => c.UserId == id).FirstOrDefaultAsync();
            if (entity == null)
            {
                throw new NotFoundException("MedicalProvider", id);
            }
            return entity;
        }

        public async Task AddAsync(MedicalProvider MedicalProvider)
        {
            await _MedicalProviders.InsertOneAsync(MedicalProvider);
        }

        public async Task UpdateAsync(MedicalProvider MedicalProvider)
        {
            await _MedicalProviders.ReplaceOneAsync(c => c.Id == MedicalProvider.Id, MedicalProvider);
        }

        public async Task DeleteAsync(MedicalProvider MedicalProvider)
        {
            await _MedicalProviders.DeleteOneAsync(c => c.Id == MedicalProvider.Id);
        }
        public async Task<UpdateResult> UpdateManyAsync(FilterDefinition<MedicalProvider> filter, UpdateDefinition<MedicalProvider> update)
        {
            return await _MedicalProviders.UpdateManyAsync(filter, update);
        }
        public async Task<IEnumerable<MedicalProvider>> GetAllAsync(Expression<Func<MedicalProvider, bool>> filter, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _MedicalProviders.Find(filter, options).ToListAsync();
        }

    }
}
