using MediatR;
using Spectra.Application.ScheduleAppointments.DoctorSchedules.Commands;
using Spectra.Application.ScheduleAppointments.DoctorSchedules.DTO;
using Spectra.Application.ScheduleAppointments.DoctorSchedules.Queries;
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.ScheduleAppointments.DoctorSchedules
{
    public interface IDoctorScheduleService
    {
        Task<OperationResult<Unit>> CreateDoctorSchedule(CreateDoctorScheduleDto input);
        Task<OperationResult<Unit>> DeleteDoctorSchedule(string id);
        Task<OperationResult<IEnumerable<AppointmentDto>>> GetAllDoctorSchedules(GetAllDoctorSchedulesQuery input);
        Task<OperationResult<DoctorSchedule>> GetDoctorScheduleById(string id);
        Task<OperationResult<Unit>> UpdateDoctorSchedule(string id, UpdateDoctorScheduleCommand input);
    }
}