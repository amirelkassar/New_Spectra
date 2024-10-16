using MongoDB.Driver;
using Spectra.Domain.MedicalStaff.Doctor;
using System.Linq.Expressions;

namespace Spectra.Application.MedicalStaff.Doctors
{
    public interface IDoctorRepository
    {
        Task AddAsync(Doctor doctor);
        Task DeleteAsync(Doctor doctor);
        Task<IEnumerable<Doctor>> GetAllAsync(Expression<Func<Doctor, bool>> filter = null, FindOptions options = null);
        Task<Doctor> GetByIdAsync(string id);
        Task UpdateAsync(Doctor doctor);
    }
}