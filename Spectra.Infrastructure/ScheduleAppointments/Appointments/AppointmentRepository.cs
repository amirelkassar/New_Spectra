using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Application.ScheduleAppointments.Appointments;

using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Common.Exceptions;
using System.Linq.Expressions;

namespace Spectra.Infrastructure.ScheduleAppointments.Appointments
{
    public class AppointmentRepository : IAppointmentRepository
    {
        private readonly IMongoCollection<Appointment> _appointments;

        public AppointmentRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _appointments = database.GetCollection<Appointment>("Appointments");
        }
        public async Task<Appointment> GetByIdAsync(string id)
        {

            var entity = await _appointments.Find(c => c.Id == id).FirstOrDefaultAsync();
            if (entity == null)
            {
                throw new NotFoundException("Appointment", id);
            }

            return entity;
        }

        public async Task AddAsync(Appointment appointment)
        {
            await _appointments.InsertOneAsync(appointment);
        }

        public async Task UpdateAsync(Appointment appointment)
        {
            await _appointments.ReplaceOneAsync(c => c.Id == appointment.Id, appointment);
        }

        public async Task DeleteAsync(Appointment appointment)
        {
            await _appointments.DeleteOneAsync(c => c.Id == appointment.Id);
        }
        //public async Task<IEnumerable<Appointment>> GetAllAsync(Expression<Func<Appointment, bool>> filter=null, FindOptions options = null)
        //{
        //    filter ??= _ => true;
        //    return await _appointments.Find(filter, options).ToListAsync();
        //}

        public async Task<PaginatedResult<Appointment>> GetAllAsyncA(
           Expression<Func<Appointment, bool>> filter = null,
             FindOptions options = null,
       int pageNumber = 1,
       int pageSize = 10)
        {
            var filterDefinition = filter ?? (x => true);

            // Use MongoDB's sorting and pagination
            var query = await _appointments
                .Find(filterDefinition, options)
                //.SortByDescending(x => x.) // Sort by Daysdate in descending order
                .Skip((pageNumber - 1) * pageSize) // Skip to the correct page
                .Limit(pageSize).ToListAsync();                  // Limit results to pageSize

            //// Retrieve the paginated and sorted list of appointments
            //var appointments = await query.ToListAsync();

            // Get the total count of matching documents for pagination
            var totalCount = await _appointments.CountDocumentsAsync(filterDefinition);

            return new PaginatedResult<Appointment>(query,totalCount,pageSize);
        }
    }


}


