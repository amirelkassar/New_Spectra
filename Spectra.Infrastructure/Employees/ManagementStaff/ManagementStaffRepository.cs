using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Spectra.Application.Employees.ManagementStaff;
using Spectra.Application.Interfaces;
using Spectra.Domain.Employees.ManagementStaff;
using Spectra.Domain.Shared.Common.Exceptions;
using System.Linq.Expressions;

namespace Spectra.Infrastructure.Employees.ManagementStaff
{
    public class ManagementStaffRepository : IManagementStaffRepository
    {
        private readonly IMongoCollection<Staff> _staff;

        public ManagementStaffRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;

            _staff = database.GetCollection<Staff>("ManagementStaff");

        }

        public async Task<Staff> GetByIdAsync(string id)
        {

            var entity = await _staff.Find(c => c.Id == id).FirstOrDefaultAsync();

            if (entity == null)
            {
                throw new NotFoundException("ManagementStaff", id);
            }
            return entity;
        }

        public async Task AddAsync(Staff staff)
        {
            await _staff.InsertOneAsync(staff);
        }
        public async Task UpdateAsync(Staff staff)
        {
            await _staff.ReplaceOneAsync(c => c.Id == staff.Id, staff);
        }

        public async Task DeleteAsync(Staff staff)
        {
            await _staff.DeleteOneAsync(c => c.Id == staff.Id);
        }
        public async Task<UpdateResult> UpdateManyAsync(FilterDefinition<Staff> filter, UpdateDefinition<Staff> update)
        {
            return await _staff.UpdateManyAsync(filter, update);
        }
        public async Task<IEnumerable<Staff>> GetAllAsync(Expression<Func<Staff, bool>> filter, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _staff.Find(filter, options).ToListAsync();
        }

    }
}

