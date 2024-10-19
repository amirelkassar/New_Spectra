using MediatR;
using Spectra.Application.ScheduleAppointments.Appointments.Commands;
using Spectra.Application.ScheduleAppointments.Appointments.DTO;
using Spectra.Application.ScheduleAppointments.Appointments.Queries;
using Spectra.Application.ScheduleAppointments.Appointments.Services;
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.ScheduleAppointments.Appointments
{

    public class AppointmentService : IAppointmentService
    {
        private readonly IMediator _mediator;

        public AppointmentService(IMediator mediator)
        {
            _mediator = mediator;

        }

        public async Task<OperationResult<string>> CreateAppointment(CreateAppointmentCommand input)
        {
            var command = new CreateAppointmentCommand
            {

                DoctorId = input.DoctorId,
                AppointmentNotes = input.AppointmentNotes,
                AppointmentType = input.AppointmentType,
                ClientId = input.ClientId,
                DaysdDate = input.DaysdDate,
                DoctorScheduleId = input.DoctorScheduleId,
                From = input.From,
                MoringOrNight = input.MoringOrNight,



            };

            return await _mediator.Send(command);
        }
        //public async Task<OperationResult<Unit>> CreateAppointmentClient(string id, AddAppointmentClientCommand input)
        //{
        //    var command = new AddAppointmentClientCommand
        //    {
        //        Id = id,
        //        ClientId = input.ClientId,
        //    };

        //    return await _mediator.Send(command);
        //}

        public async Task<OperationResult<Unit>> DeleteAppointment(string id)
        {
            var command = new DeleteAppointmentCommand { Id = id };
            return await _mediator.Send(command);
        }





        public async Task<OperationResult<IEnumerable<AppointmentWithClientDto>>> GetAllAppointmentsDoctor(GetAllAppointmentsStatuDoctorQuery input)
        {

            var query = new GetAllAppointmentsStatuDoctorQuery() { DoctorId = input.DoctorId, Status = input.Status };
            return await _mediator.Send(query);
        }


        public async Task<OperationResult<IEnumerable<AppointmentWithClientDto>>> GetAllAppointmentsStatuDoctor(GetAllAppointmentsStatuDoctorQuery input)
        {

            var query = new GetAllAppointmentsStatuDoctorQuery() { DoctorId = input.DoctorId, Status = input.Status };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<Appointment>> GetAppointmentById(string id)
        {
            var query = new GetDoctorScheduleByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<Unit>> UpdateAppointment(string id, UpdateAppointmentCommand input)
        {
            var command = new UpdateAppointmentCommand
            {
                Id = id,
                Status = input.Status,
                DoctorId = input.DoctorId,
                AppointmentNotes = input.AppointmentNotes,
                AppointmentType = input.AppointmentType,
                ClientId = input.ClientId,
                Daysdate = input.Daysdate,
                DoctorScheduleId = input.DoctorScheduleId,
                AppointmentService = input.AppointmentService

            };

            return await _mediator.Send(command);
        }

        //public async Task<OperationResult<Unit>> UpdateClientAppointment(string id, AddAppointmentClientCommand input)
        //{
        //    var command = new AddAppointmentClientCommand
        //    {
        //        Id = id,
        //        ClientId = input.ClientId,
        //    };

        //    return await _mediator.Send(command);
        //}

    }
}

