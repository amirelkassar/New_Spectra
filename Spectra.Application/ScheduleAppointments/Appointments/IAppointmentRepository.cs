using MongoDB.Driver;
using Spectra.Domain.ScheduleAppointments;
using System.Linq.Expressions;

namespace Spectra.Application.ScheduleAppointments.Appointments
{
    public interface IAppointmentRepository
    {
        Task AddAsync(Appointment appointment);
        Task DeleteAsync(Appointment appointment);
        Task<IEnumerable<Appointment>> GetAllAsync(Expression<Func<Appointment, bool>> filter = null, FindOptions options = null);
        Task<Appointment> GetByIdAsync(string id);
        Task UpdateAsync(Appointment appointment);
    }
}