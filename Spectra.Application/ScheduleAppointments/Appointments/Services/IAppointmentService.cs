using MediatR;
using Spectra.Application.ScheduleAppointments.Appointments.Commands;
using Spectra.Application.ScheduleAppointments.Appointments.DTO;
using Spectra.Application.ScheduleAppointments.Appointments.Queries;

using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.ScheduleAppointments.Appointments.Services
{
    public interface IAppointmentService
    {
        Task<OperationResult<string>> CreateAppointment(CreateAppointmentCommand input);
        Task<OperationResult<Unit>> DeleteAppointment(string id);
        Task<OperationResult<IEnumerable<AppointmentWithClientDto>>> GetAllAppointmentsStatuDoctor(GetAllAppointmentsStatuDoctorQuery input);
        Task<OperationResult<Appointment>> GetAppointmentById(string id);
        Task<OperationResult<Unit>> UpdateAppointment(string id, UpdateAppointmentCommand input);
    }
}