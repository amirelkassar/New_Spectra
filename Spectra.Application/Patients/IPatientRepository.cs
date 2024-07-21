using Spectra.Domain.Patients;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Spectra.Application.Patients
{
    public interface IPatientRepository
    {
        Task AddAsync(Patient patient);
        Task UpdateAsync(Patient patient);
        Task DeleteAsync(string id);
        Task<Patient> GetByIdAsync(string id);
        Task<IEnumerable<Patient>> GetAllAsync();
    }
}
