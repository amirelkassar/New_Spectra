using MediatR;
using Spectra.Application.MedicalStaff.Doctors;
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.ScheduleAppointments.Appointments.Queries
{
    public class GetAllDoctorSchedulesQuery : IRequest<OperationResult<IEnumerable<Appointment>>>
    {
        public string DoctorId { get; set; }

    }

    public class GetAllAppointmentsDoctorQueryHandler : IRequestHandler<GetAllDoctorSchedulesQuery, OperationResult<IEnumerable<Appointment>>>
    {
        private readonly IAppointmentRepository _appointmentRepository;

        private readonly IDoctorRepository _doctorRepository;
        public GetAllAppointmentsDoctorQueryHandler(IAppointmentRepository appointmentRepository, IDoctorRepository doctorRepository)
        {
            _appointmentRepository = appointmentRepository;
            _doctorRepository = doctorRepository;
        }

        public async Task<OperationResult<IEnumerable<Appointment>>> Handle(GetAllDoctorSchedulesQuery request, CancellationToken cancellationToken)
        {

            var doctor = await _doctorRepository.GetByIdAsync(request.DoctorId);

            if (doctor == null)
            {
                throw new NotFoundException("Doctors", request.DoctorId);
            }


            var appointment = await _appointmentRepository.GetAllAsyncA(c => c.DoctorId == request.DoctorId);


            return OperationResult<IEnumerable<Appointment>>.Success(appointment.Items);


        }
    }
}
