using MediatR;
<<<<<<< HEAD
=======
using Spectra.Application.Admin.Queries;
using Spectra.Application.Hellper;
>>>>>>> Admin-BackEnd
using Spectra.Application.MedicalStaff.Doctors.Dto;
using Spectra.Domain.MedicalStaff.Doctor;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MedicalStaff.Doctors.Services
{
    public interface IDoctorService
    {
        Task<OperationResult<string>> CreateDoctor(CreateDoctorDto input);
        Task<OperationResult<Unit>> DeleteDoctor(string id);
        Task<OperationResult<IEnumerable<Doctor>>> GetAllDoctors();
        Task<OperationResult<Doctor>> GetDoctorById(string id);
<<<<<<< HEAD
        Task<OperationResult<Unit>> UpdateDoctor(string id, UpdateDoctorDto input); 
        Task<OperationResult<IEnumerable<Doctor>>> GetAllDoctorSpecificServices();
=======

        Task<OperationResult<Unit>> UpdateDoctor(string id, UpdateDoctorDto input);


        Task<OperationResult<IEnumerable<Doctor>>> GetAllDoctorSpecificServices();
    
>>>>>>> Admin-BackEnd
    }
}