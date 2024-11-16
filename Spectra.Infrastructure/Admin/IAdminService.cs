using MediatR;
using Spectra.Application.Admin.Commands;
using Spectra.Application.Admin.Dto;
using Spectra.Application.Admin.Queries;
using Spectra.Application.Contracts.Queries;
using Spectra.Application.Hellper;
using Spectra.Domain.Clients;
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.Admin
{
    public interface IAdminService
    {
        Task<OperationResult<string>> CreateEmplyee(CreateEmployeesDto input);

        //Task<OperationResult<string>> CreateClientByAdmin(CreateNormalClientDto input);
        Task<OperationResult<PaginatedResult<Appointment>>> GetAllAppointmentsDoctorAsync(GetAllAppointmentDoctorQuery input);
        Task<OperationResult<PaginatedResult<Client>>> GetAllClientsAsyncWithPagination(GetAllClientsQuery input);
        Task<OperationResult<PaginatedResult<GetAllemployeeDto>>> GetAllContractsOfEployees(GetAllContractWithStatusQuery input);
        Task<OperationResult<IEnumerable<GetAllCopiesWithDataDto>>> GetAllCopiesOfContract(GetAllCopiesOFContractQuery input);
        Task<OperationResult<PaginatedResult<Doctor>>> GetAllDoctorsWithPagination(GetAllDoctorEmpQuery input);
        Task<OperationResult<CollectAllEmployeeDto>> GetAllEmplyees(GetAllEmployeesQuery input);
        Task<OperationResult<GetEmployIdDto>> GetEmployeeByid(string id, JobTypes input);
        Task<OperationResult<Unit>> UpdateContractFromAdmin(string id, UpdateContractToSendToEmployeeCommand input);
        Task<OperationResult<Unit>> UpdateContractStatus(string id, UpdateContractStatusCommand input);

        //Task<OperationResult<Unit>> UpdateDoctorEmploymentStatus(string id, UpdateDoctorEmploymentStatusCommand input);
        //Task<OperationResult<Unit>> UpdateDoctorsEmploymentStatus(UpdateDoctorEmploymentStatusCommand input);
    }
}