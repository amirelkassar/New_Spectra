using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.MedicalStaff.Doctors;
using Spectra.Domain.Contracts;
using Spectra.Domain.MedicalStaff.Doctor;
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

        public async Task<IEnumerable<Doctor>> GetAllAsync(Expression<Func<Doctor, bool>> filter = null, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _doctors.Find(filter, options).ToListAsync();
        }
    }
}
