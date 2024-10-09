using MediatR;
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.ScheduleAppointments.Appointments.Queries
{
    public class GetDoctorScheduleByIdQuery : IRequest<OperationResult<Appointment>>
    {
        public string Id { get; set; }
    }

    public class GetAppointmentByIdQueryHandler : IRequestHandler<GetDoctorScheduleByIdQuery, OperationResult<Appointment>>
    {
        private readonly IAppointmentRepository _appointmentRepository;
        public GetAppointmentByIdQueryHandler(IAppointmentRepository appointmentRepository)
        {
            _appointmentRepository = appointmentRepository;
        }

        public async Task<OperationResult<Appointment>> Handle(GetDoctorScheduleByIdQuery request, CancellationToken cancellationToken)
        {

            var appointment = await _appointmentRepository.GetByIdAsync(request.Id);


            return OperationResult<Appointment>.Success(appointment);
        }
    }
}
