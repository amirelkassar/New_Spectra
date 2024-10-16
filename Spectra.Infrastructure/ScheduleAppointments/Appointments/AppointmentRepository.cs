using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.ScheduleAppointments.Appointments;
using Spectra.Domain.MedicalStaff.Doctor;
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Common.Exceptions;
using System.Linq.Expressions;

namespace Spectra.Infrastructure.ScheduleAppointments.Appointments
{
    public class AppointmentRepository: IAppointmentRepository
    {
        private readonly IMongoCollection<Appointment> _Appointments;

        public AppointmentRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _Appointments = database.GetCollection<Appointment>("Appointments");
        }
        public async Task<Appointment> GetByIdAsync(string id)
        {
          
            var entity = await _Appointments.Find(c => c.Id == id).FirstOrDefaultAsync();
            if (entity == null)
            {
                throw new NotFoundException("Appointment", id);
            }

            return entity;
        }

        public async Task AddAsync(Appointment appointment)
        {
            await _Appointments.InsertOneAsync(appointment);
        }

        public async Task UpdateAsync(Appointment appointment)
        {
            await _Appointments.ReplaceOneAsync(c => c.Id == appointment.Id, appointment);
        }

        public async Task DeleteAsync(Appointment appointment)
        {
            await _Appointments.DeleteOneAsync(c => c.Id == appointment.Id);
        }

        public async Task<IEnumerable<Appointment>> GetAllAsync(Expression<Func<Appointment, bool>> filter, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _Appointments.Find(filter, options).ToListAsync();
        }
    }
}
