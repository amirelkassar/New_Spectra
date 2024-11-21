using MediatR;
using Spectra.Application.Admin.Commands;
using Spectra.Application.Admin.Dto;
using Spectra.Application.Admin.Queries;
using Spectra.Application.Contracts.Queries;
using Spectra.Application.Hellper;
using Spectra.Domain.Clients;
using Spectra.Domain.Employees.MedicalStaff;
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.Admin
{
    public interface IAdminService
    {
        Task<OperationResult> CreateEmplyee(CreateEmployeesDto input);
        Task<OperationResult> GetAllAppointmentsDoctorAsync(GetAllAppointmentDoctorQuery input);
        Task<OperationResult> GetAllClientsAsyncWithPagination(GetAllClientsQuery input);
        Task<OperationResult> GetAllDoctorsWithPagination(GetAllDoctorEmpQuery input);
        Task<OperationResult> GetAllEmplyees(GetAllEmployeesQuery input);
        Task<OperationResult> GetEmployeeByid(string id, JobTypes input);
    }
}