using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Spectra.Application.Employees.MedicalStaff.Doctors;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.Contracts;
using Spectra.Domain.Employees.ManagementStaff;
using Spectra.Domain.Employees.MedicalStaff.Doctor;
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Common.Exceptions;
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
            var filterDefinition = filter ?? (x => true);

            // Use MongoDB's sorting and pagination
            var query = await _doctors
                .Find(filterDefinition, options)
                //.SortByDescending(x => x.) // Sort by Daysdate in descending order
                .Skip((pageNumber - 1) * pageSize) // Skip to the correct page
                .Limit(pageSize).ToListAsync();                  // Limit results to pageSize

        
            var totalCount = await _doctors.CountDocumentsAsync(filterDefinition);

            return new PaginatedResult<Doctor>
            {
                Items = query,
                TotalCount = (int)totalCount,
                PageNumber = pageNumber,
                PageSize = pageSize
            };
        }
        public async Task<Doctor> GetByIdAsync(string id)
        {
          
            var entity = await _doctors.Find(c => c.Id == id).FirstOrDefaultAsync();
            if (entity == null)
            {
                throw new NotFoundException("Doctor", id);
            }
            return entity;
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
