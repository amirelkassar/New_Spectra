using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.ScheduleAppointments.Appointments.Commands
{
    public class UpdateAppointmentCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public DateTime Daysdate { get; set; }
        public string? AppointmentNotes { get; set; }
        public AppointmentStatus Status { get; set; }
        public AppointmentType AppointmentType { get; set; }
        public string DoctorScheduleId { get; set; }
        public string ClientId { get; set; }
        public string DoctorId { get; set; }
        public AppointmentServices AppointmentService { get; set; }

    }

    public class UpdateAppointmentCommandHandler : IRequestHandler<UpdateAppointmentCommand, OperationResult<Unit>>
    {
        private readonly IAppointmentRepository _appointmentRepository;
        public UpdateAppointmentCommandHandler(IAppointmentRepository appointmentRepository)
        {
            _appointmentRepository = appointmentRepository;
        }

        public async Task<OperationResult<Unit>> Handle(UpdateAppointmentCommand request, CancellationToken cancellationToken)
        {

            var appointment = await _appointmentRepository.GetByIdAsync(request.Id);


            appointment.Status = request.Status;
            appointment.DoctorId = request.DoctorId;
            appointment.AppointmentType = request.AppointmentType;
            appointment.AppointmentNotes = request.AppointmentNotes;
            appointment.Daysdate = request.Daysdate;
            appointment.DoctorScheduleId = request.DoctorScheduleId;
            appointment.ClientId = request.ClientId;
            //appointment.AppointmentService = request.AppointmentService;

            await _appointmentRepository.UpdateAsync(appointment);
            return OperationResult<Unit>.Success(Unit.Value);


        }
    }

}
