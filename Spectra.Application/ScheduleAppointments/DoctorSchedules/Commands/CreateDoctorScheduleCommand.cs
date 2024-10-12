using MediatR;
using Spectra.Application.Messaging;
using Spectra.Application.ScheduleAppointments.DoctorSchedules.DTO;
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.ScheduleAppointments.DoctorSchedules.Commands
{


    public class CreateDoctorScheduleCommand : ICommand<OperationResult<Unit>>
    {
        public string DoctorId { get; set; }
        public TimeOnly From { get; set; }
        public MoringOrNight FromMoringOrNight { get; set; }
        public TimeOnly To { get; set; }
        public MoringOrNight ToMoringOrNight { get; set; }
        public DaysOfWeeks Days { get; set; }

    }

    public class CreateDoctorScheduleCommandHandler : IRequestHandler<CreateDoctorScheduleCommand, OperationResult<Unit>>
    {
        private readonly IDoctorScheduleRepository _doctorScheduleRepository;
        public CreateDoctorScheduleCommandHandler(IDoctorScheduleRepository doctorScheduleRepository)
        {
            _doctorScheduleRepository = doctorScheduleRepository;
        }
        public async Task<OperationResult<Unit>> Handle(CreateDoctorScheduleCommand request, CancellationToken cancellationToken)
        {
          
         var appointment = DoctorSchedule.Create(
          Ulid.NewUlid().ToString(),
          request.DoctorId,
          request.From,
          request.FromMoringOrNight,
          request.To,
          request.ToMoringOrNight,
          request.Days
             );

                await _doctorScheduleRepository.AddAsync(appointment);
            
            return OperationResult<Unit>.Success(Unit.Value);

        }

       





          


        }
    }


