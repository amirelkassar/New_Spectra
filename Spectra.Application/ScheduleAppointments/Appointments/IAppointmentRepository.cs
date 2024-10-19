using MongoDB.Driver;
using Spectra.Application.Hellper;
using Spectra.Domain.ScheduleAppointments;
using System.Linq.Expressions;

namespace Spectra.Application.ScheduleAppointments.Appointments
{
    public interface IAppointmentRepository
    {
        Task AddAsync(Appointment appointment);
        Task DeleteAsync(Appointment appointment);
        //Task<PaginatedResult<Appointment>> GetAllAsync(
        //Expression<Func<Appointment, bool>> filter = null, FindOptions options = null);
      Task<PaginatedResult<Appointment>> GetAllAsyncA(
          Expression<Func<Appointment, bool>> filter = null,
          FindOptions options = null,
          int pageNumber = 1,
          int pageSize = 10);
        Task<Appointment> GetByIdAsync(string id);
        Task UpdateAsync(Appointment appointment);
    }
  
}