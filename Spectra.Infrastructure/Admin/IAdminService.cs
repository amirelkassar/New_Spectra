using MediatR;
using Spectra.Application.Admin.Commands;
using Spectra.Application.Admin.Queries;
using Spectra.Application.Hellper;
using Spectra.Domain.Clients;
using Spectra.Domain.MedicalStaff.Doctor;
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.Admin
{
    public interface IAdminService
    {
        //Task<OperationResult<string>> CreateClientByAdmin(CreateNormalClientDto input);
        Task<OperationResult<PaginatedResult<Appointment>>> GetAllAppointmentsDoctorAsync(GetAllAppointmentDoctorQuery input);
        Task<OperationResult<PaginatedResult<Client>>> GetAllClientsAsyncWithPagination(GetAllClientsQuery input);
        Task<OperationResult<PaginatedResult<Doctor>>> GetAllDoctorsWithPagination(GetAllDoctorEmpQuery input);
        //Task<OperationResult<Unit>> UpdateDoctorEmploymentStatus(string id, UpdateDoctorEmploymentStatusCommand input);
        Task<OperationResult<Unit>> UpdateDoctorsEmploymentStatus(UpdateDoctorEmploymentStatusCommand input);
    }
}