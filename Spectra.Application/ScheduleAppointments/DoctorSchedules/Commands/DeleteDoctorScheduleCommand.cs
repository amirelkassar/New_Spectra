using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.ScheduleAppointments.DoctorSchedules.Commands
{
    public class DeleteDoctorScheduleCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }

    public class DeleteAppointmentCommandHandler : IRequestHandler<DeleteDoctorScheduleCommand, OperationResult<Unit>>
    {
        private readonly IDoctorScheduleRepository _doctorScheduleRepository;
        public DeleteAppointmentCommandHandler(IDoctorScheduleRepository doctorScheduleRepository)
        {
            _doctorScheduleRepository = doctorScheduleRepository;
        }

        public async Task<OperationResult<Unit>> Handle(DeleteDoctorScheduleCommand request, CancellationToken cancellationToken)
        {

            var appointment = await _doctorScheduleRepository.GetByIdAsync(request.Id);
            await _doctorScheduleRepository.DeleteAsync(appointment);
            return OperationResult<Unit>.Success(Unit.Value);

        }


    }

}
