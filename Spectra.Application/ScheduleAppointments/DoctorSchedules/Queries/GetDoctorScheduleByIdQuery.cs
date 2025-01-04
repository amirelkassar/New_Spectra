using MediatR;
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.ScheduleAppointments.DoctorSchedules.Queries
{
    public class GetDoctorScheduleByIdQuery : IRequest<OperationResult<DoctorSchedule>>
    {
        public string Id { get; set; }
    }

    public class GetAppointmentByIdQueryHandler : IRequestHandler<GetDoctorScheduleByIdQuery, OperationResult<DoctorSchedule>>
    {
        private readonly IDoctorScheduleRepository _doctorScheduleRepository;
        public GetAppointmentByIdQueryHandler(IDoctorScheduleRepository doctorScheduleRepository)
        {

            _doctorScheduleRepository = doctorScheduleRepository;

        }

        public async Task<OperationResult<DoctorSchedule>> Handle(GetDoctorScheduleByIdQuery request, CancellationToken cancellationToken)
        {

            var doctorSchedule = await _doctorScheduleRepository.GetByIdAsync(request.Id);



            return OperationResult<DoctorSchedule>.Success(doctorSchedule);
        }
    }
}
