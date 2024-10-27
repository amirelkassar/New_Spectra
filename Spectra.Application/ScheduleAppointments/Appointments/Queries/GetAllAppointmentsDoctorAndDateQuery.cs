using MediatR;
using Spectra.Application.Employees.MedicalStaff.Doctors;
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.ScheduleAppointments.Appointments.Queries
{
    public class GetAllAppointmentsDoctorAndDateQuery : IRequest<OperationResult<IEnumerable<Appointment>>>
    {
        public string DoctorId { get; set; }
        public DateTime? Daysdate { get; set; }
        
    }

    public class GetAllAppointmentsDoctorQueryHandler : IRequestHandler<GetAllAppointmentsDoctorAndDateQuery, OperationResult<IEnumerable<Appointment>>>
    {
        private readonly IAppointmentRepository _appointmentRepository;

        private readonly IDoctorRepository _doctorRepository;
        public GetAllAppointmentsDoctorQueryHandler(IAppointmentRepository appointmentRepository, IDoctorRepository doctorRepository)
        {
            _appointmentRepository = appointmentRepository;
            _doctorRepository = doctorRepository;
        }
        // here we get all appointments of the doctors and we can use this page to get All Client at the data and we use it at Dashboard of the doctor
        public async Task<OperationResult<IEnumerable<Appointment>>> Handle(GetAllAppointmentsDoctorAndDateQuery request, CancellationToken cancellationToken)
        {


            var doctor = await _doctorRepository.GetByIdAsync(request.DoctorId);
            if (request.Daysdate == null)
            {
                var appointments = await _appointmentRepository.GetAllAsyncA(c => c.DoctorId == request.DoctorId);


                return OperationResult<IEnumerable<Appointment>>.Success(appointments.Items);
            }

            var appointment = await _appointmentRepository.GetAllAsyncA(c => c.DoctorId == request.DoctorId && c.Daysdate == request.Daysdate);


            return OperationResult<IEnumerable<Appointment>>.Success(appointment.Items);


        }
    }
}
