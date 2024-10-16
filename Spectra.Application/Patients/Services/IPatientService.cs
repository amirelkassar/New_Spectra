using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.Drug.Commands;
using Spectra.Application.Patients.Commands;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.Patients;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Infrastructure.Patients
{
    public interface IPatientService
    {
        Task<OperationResult<string>> CreatePatient(CreatePatientCommand input);
        Task<OperationResult<Unit>> DeletePatient(string id);
        Task<OperationResult<IEnumerable<Patient>>> GetAllPatients();
        Task<OperationResult<Patient>> GetPatientById(string id);
        Task<OperationResult<Unit>> UpdatePatient(string id, Name name, HumenGender gender, ClientPatientRelations relationToClient, DateOnly dateOfBirth, string nationalId);
 
      
    }
}