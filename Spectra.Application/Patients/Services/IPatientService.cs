using Spectra.Application.Patients.Commands;
using Spectra.Domain.Patients;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;

namespace Spectra.Infrastructure.Patients
{
    public interface IPatientService
    {
        Task<string> CreatePatient(CreatePatientCommand input);
        Task DeletePatient(string id);
        Task<IEnumerable<Patient>> GetAllPatients();
        Task<Patient> GetPatientById(string id);
        Task UpdatePatient(string id, Name name, HumenGender gender, ClientPatientRelations relationToClient, DateOnly dateOfBirth, string nationalId);
       
    }
}