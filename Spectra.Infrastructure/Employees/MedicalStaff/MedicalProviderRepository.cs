using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders;
using Spectra.Application.Interfaces;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Common.Exceptions;
using System.Linq.Expressions;

namespace Spectra.Infrastructure.Employees.MedicalStaff.MedicalProviders
{
    public class MedicalProviderRepository : IMedicalProviderRepository
    {
        private readonly IMongoCollection<Employee> _MedicalProviders;

        public MedicalProviderRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;

            _MedicalProviders = database.GetCollection<Employee>("MedicalProviders");

        }

        public async Task<Employee> GetByIdAsync(string id)
        {

            var entity = await _MedicalProviders.Find(c => c.Id == id).FirstOrDefaultAsync();

            if (entity == null)
            {
                throw new NotFoundException("MedicalProviders", id);
            }
            return entity;
        }

        public async Task AddAsync(Employee input)
        {
            await _MedicalProviders.InsertOneAsync(input);
        }
        public async Task UpdateAsync(Employee input)
        {
            var props=typeof(Employee).GetProperties();
            var obj = Builders<Employee>.Update.Set(nameof(input.Id),input.Id);
            foreach (var prop in props)
            {
                obj.Set(prop.Name, prop.GetValue(input));
            }

            await _MedicalProviders.UpdateOneAsync(m => m.Id == input.Id, obj);
        }

        public async Task DeleteAsync(Employee input)
        {
            await _MedicalProviders.DeleteOneAsync(c => c.Id == input.Id);
        }
        public async Task<UpdateResult> UpdateManyAsync(FilterDefinition<Employee> filter, UpdateDefinition<Employee> update)
        {
            return await _MedicalProviders.UpdateManyAsync(filter, update);
        }
        public async Task<(IEnumerable<Employee> data, long total)> GetAllAsync(Expression<Func<Employee, bool>> filter,
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

        public async Task<bool> Exists(Expression<Func<Employee, bool>> filter = null, FindOptions options = null)
        {
            return await _MedicalProviders.Find(filter).AnyAsync();

        }
    }
}
