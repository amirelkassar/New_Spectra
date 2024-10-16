using MediatR;
using Spectra.Application.Messaging;
using Spectra.Application.ScheduleAppointments.Appointments;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.ScheduleAppointments.DoctorSchedules.Commands
{
    public class UpdateDoctorScheduleCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public string DoctorId { get; set; }
        public TimeOnly From { get; set; }
        public MoringOrNight FromMoringOrNight { get; set; }
        public TimeOnly To { get; set; }
        public MoringOrNight ToMoringOrNight { get; set; }
        public DaysOfWeeks Days { get; set; }
    }

    public class UpdateAppointmentCommandHandler : IRequestHandler<UpdateDoctorScheduleCommand, OperationResult<Unit>>
    {
        private readonly IDoctorScheduleRepository _doctorScheduleRepository;
        public UpdateAppointmentCommandHandler(IDoctorScheduleRepository doctorScheduleRepository)
        {
            _doctorScheduleRepository = doctorScheduleRepository;
        }

        public async Task<OperationResult<Unit>> Handle(UpdateDoctorScheduleCommand request, CancellationToken cancellationToken)
        {

            var appointment = await _doctorScheduleRepository.GetByIdAsync(request.Id);

            appointment.DoctorId = request.DoctorId;
            appointment.From = request.From;
            appointment.FromMoringOrNight = request.FromMoringOrNight;
            appointment.To = request.To;
            appointment.ToMoringOrNight = request.ToMoringOrNight;
            appointment.Days = request.Days;


            await _doctorScheduleRepository.UpdateAsync(appointment);
            return OperationResult<Unit>.Success(Unit.Value);


        }
    }

}
