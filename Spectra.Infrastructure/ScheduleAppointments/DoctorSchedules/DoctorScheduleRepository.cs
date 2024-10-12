using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.ScheduleAppointments.DoctorSchedules;
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Common.Exceptions;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.ScheduleDoctorSchedule.DoctorSchedules
{
    public class DoctorScheduleRepository : IDoctorScheduleRepository
    {
        private readonly IMongoCollection<DoctorSchedule> _DoctorSchedule;

        public DoctorScheduleRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _DoctorSchedule = database.GetCollection<DoctorSchedule>("DoctorSchedule");
        }
        public async Task<DoctorSchedule> GetByIdAsync(string id)
        {
          
            var entity = await _DoctorSchedule.Find(c => c.Id == id).FirstOrDefaultAsync();
            if (entity == null)
            {
                throw new NotFoundException("Doctor Schedule", id);
            }
            return entity;
        }

        public async Task AddAsync(DoctorSchedule doctorSchedule)
        {
            await _DoctorSchedule.InsertOneAsync(doctorSchedule);
        }

        public async Task UpdateAsync(DoctorSchedule doctorSchedule)
        {
            await _DoctorSchedule.ReplaceOneAsync(c => c.Id == doctorSchedule.Id, doctorSchedule);
        }

        public async Task DeleteAsync(DoctorSchedule doctorSchedule)
        {
            await _DoctorSchedule.DeleteOneAsync(c => c.Id == doctorSchedule.Id);
        }

        public async Task<IEnumerable<DoctorSchedule>> GetAllAsync(Expression<Func<DoctorSchedule, bool>> filter, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _DoctorSchedule.Find(filter, options).ToListAsync();
        }
    }
}
