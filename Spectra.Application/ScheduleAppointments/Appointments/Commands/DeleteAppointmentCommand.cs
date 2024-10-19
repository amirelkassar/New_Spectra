using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.ScheduleAppointments.Appointments.Commands
{
    public class DeleteAppointmentCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }

    public class DeleteAppointmentCommandHandler : IRequestHandler<DeleteAppointmentCommand, OperationResult<Unit>>
    {
        private readonly IAppointmentRepository _appointmentRepository;
        public DeleteAppointmentCommandHandler(IAppointmentRepository appointmentRepository)
        {
            _appointmentRepository = appointmentRepository;
        }

        public async Task<OperationResult<Unit>> Handle(DeleteAppointmentCommand request, CancellationToken cancellationToken)
        {
            var appointment = await _appointmentRepository.GetByIdAsync(request.Id);
            await _appointmentRepository.DeleteAsync(appointment);
            return OperationResult<Unit>.Success(Unit.Value);
        }


    }

}
