using MongoDB.Driver;
using Spectra.Domain.ScheduleAppointments;
using System.Linq.Expressions;

namespace Spectra.Application.ScheduleAppointments.DoctorSchedules
{
    public interface IDoctorScheduleRepository
    {
        Task AddAsync(DoctorSchedule doctorSchedule);
        Task DeleteAsync(DoctorSchedule doctorSchedule);
        Task<IEnumerable<DoctorSchedule>> GetAllAsync(Expression<Func<DoctorSchedule, bool>> filter, FindOptions options = null);
        Task<DoctorSchedule> GetByIdAsync(string id);
        Task UpdateAsync(DoctorSchedule doctorSchedule);
    }
}