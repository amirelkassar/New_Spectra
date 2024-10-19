using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.ScheduleAppointments.Appointments.Commands
{
    public class UpdateAppointmentStatusCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }

        public AppointmentStatus Status { get; set; }


    }

    public class UpdateAppointmentStatusCommandHandler : IRequestHandler<UpdateAppointmentStatusCommand, OperationResult<Unit>>
    {
        private readonly IAppointmentRepository _appointmentRepository;
        public UpdateAppointmentStatusCommandHandler(IAppointmentRepository appointmentRepository)
        {
            _appointmentRepository = appointmentRepository;

        }

        public async Task<OperationResult<Unit>> Handle(UpdateAppointmentStatusCommand request, CancellationToken cancellationToken)
        {

            var appointment = await _appointmentRepository.GetByIdAsync(request.Id);


            appointment.Status = AppointmentStatus.Canceled;




            await _appointmentRepository.UpdateAsync(appointment);
            return OperationResult<Unit>.Success(Unit.Value);


        }
    }
}

