using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Application.MedicalStaff.Doctors;
using Spectra.Domain.MedicalStaff.Doctor;

using System.Linq.Expressions;

namespace Spectra.Infrastructure.Doctors
{
    public class DoctorRepository : IDoctorRepository
    {
        private readonly IMongoCollection<Doctor> _doctors;

        public DoctorRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;

            _doctors = database.GetCollection<Doctor>("Doctors");

        }
        public async Task<PaginatedResult<Doctor>> GetAllAsyncA(
     Expression<Func<Doctor, bool>> filter = null,
     FindOptions options = null,
     int pageNumber = 1,
     int pageSize = 10)
        {
            // Use AsQueryable to get an IMongoQueryable<Doctor>
            var query = _doctors.AsQueryable();

            // Apply the filter if provided
            if (filter != null)
            {
                query = query.Where(filter); ;
            }

            //Order by 'Created' field
            //query = query.OrderByDescending(x => x.Created.Date);

            // Get total count of the filtered query
            var totalCount = await query.CountAsync();  // Use CountAsync() from MongoDB.Driver.Linq

            // Paginate the results
            var doctors = query
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .ToList();
            // Return paginated result
            return new PaginatedResult<Doctor>
            {
                Items = doctors,
                TotalCount = totalCount,
                PageNumber = pageNumber,
                PageSize = pageSize
            };
        }
        public async Task<Doctor> GetByIdAsync(string id)
        {
            return await _doctors.Find(c => c.Id == id).FirstOrDefaultAsync();
        }

        public async Task AddAsync(Doctor doctor)
        {
            await _doctors.InsertOneAsync(doctor);
        }

        public async Task UpdateAsync(Doctor doctor)
        {
            await _doctors.ReplaceOneAsync(c => c.Id == doctor.Id, doctor);
        }

        public async Task DeleteAsync(Doctor doctor)
        {
            await _doctors.DeleteOneAsync(c => c.Id == doctor.Id);
        }
        public async Task<UpdateResult> UpdateManyAsync(FilterDefinition<Doctor> filter, UpdateDefinition<Doctor> update)
        {
            return await _doctors.UpdateManyAsync(filter, update);
        }
        public async Task<IEnumerable<Doctor>> GetAllAsync(Expression<Func<Doctor, bool>> filter, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _doctors.Find(filter, options).ToListAsync();
        }

    }
}
