using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.Employees.ManagementStaff;
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

        public async Task<MedicalProvider> GetByIdAsync(string id)
        {

            var entity = await _MedicalProviders.Find(c => c.Id == id).FirstOrDefaultAsync();

            if (entity == null)
            {
                throw new NotFoundException("MedicalProviders", id);
            }
            return entity;
        }

        public async Task AddAsync(MedicalProvider input)
        {
            await _MedicalProviders.InsertOneAsync(input);
        }
        public async Task UpdateAsync(MedicalProvider input)
        {
            await _MedicalProviders.ReplaceOneAsync(c => c.Id == input.Id, input);
        }

        public async Task DeleteAsync(MedicalProvider input)
        {
            await _MedicalProviders.DeleteOneAsync(c => c.Id == input.Id);
        }
        public async Task<UpdateResult> UpdateManyAsync(FilterDefinition<MedicalProvider> filter, UpdateDefinition<MedicalProvider> update)
        {
            return await _MedicalProviders.UpdateManyAsync(filter, update);
        }
        public async Task<(IEnumerable<MedicalProvider> data, long total)> GetAllAsync(Expression<Func<MedicalProvider, bool>> filter,
            FindOptions options = null,
            int skipCount = 0,
            int maxCount = 100)
        {
            filter ??= _ => true;
            var data = await _MedicalProviders.Find(filter, options)
                .SortByDescending(s => s.Created)
                .Skip(skipCount)
                .Limit(maxCount)
                .ToListAsync();
            var total = await _MedicalProviders.Find(filter, options).CountDocumentsAsync();
            return (data, total);
        }

        public async Task<bool> Exists(Expression<Func<MedicalProvider, bool>> filter = null, FindOptions options = null)
        {
            return await _MedicalProviders.Find(filter).AnyAsync();

        }
    }
}
