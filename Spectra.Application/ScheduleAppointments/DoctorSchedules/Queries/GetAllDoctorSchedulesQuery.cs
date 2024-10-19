using MediatR;
using Spectra.Application.MedicalStaff.Doctors;
using Spectra.Application.ScheduleAppointments.Appointments;
using Spectra.Application.ScheduleAppointments.DoctorSchedules.DTO;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.ScheduleAppointments.DoctorSchedules.Queries
{
    public class GetAllDoctorSchedulesQuery : IRequest<OperationResult<IEnumerable<AppointmentDto>>>
    {
        public string DoctorId { get; set; }

        public DateTime Daysdate { get; set; }


        public DaysOfWeeks Days { get; set; }



    }

    public class GetAllDoctorSchedulesQueryHandler : IRequestHandler<GetAllDoctorSchedulesQuery, OperationResult<IEnumerable<AppointmentDto>>>
    {
        private readonly IDoctorScheduleRepository _doctorScheduleRepository;
        private readonly IDoctorRepository _doctorRepository;
        private readonly IAppointmentRepository _appointmentRepository;

        public GetAllDoctorSchedulesQueryHandler(IDoctorScheduleRepository doctorScheduleRepository, IDoctorRepository doctorRepository, IAppointmentRepository appointmentRepository)
        {
            _doctorScheduleRepository = doctorScheduleRepository;
            _doctorRepository = doctorRepository;
            _appointmentRepository = appointmentRepository;
        }

        public async Task<OperationResult<IEnumerable<AppointmentDto>>> Handle(GetAllDoctorSchedulesQuery request, CancellationToken cancellationToken)
        {

            var doctor = await _doctorRepository.GetByIdAsync(request.DoctorId);



            var appointments = await _appointmentRepository.GetAllAsyncA(c => c.DoctorId == request.DoctorId && c.Daysdate == request.Daysdate.Date);
            //var appointmentId =  appointment.Select(c => c.DoctorScheduleId);

            var doctorSchedules = await _doctorScheduleRepository.GetAllAsync(ds =>
                 ds.DoctorId == request.DoctorId &&
                 ds.Days == request.Days
                 );


            var result = appointments.Items.Select(c => new AppointmentDto
            {
                From = c.From,
                To = c.To,
                FormMoringOrNight = c.FromMoringOrNight,
                ToMoringOrNight = c.ToMoringOrNight,
                Daysdate = c.Daysdate,
                DoctorSchedules = doctorSchedules.Select(ds => new DoctorScheduleDto
                {
                    From = ds.From,
                    To = ds.To,
                    FormMoringOrNight = ds.FromMoringOrNight,
                    ToMoringOrNight = ds.ToMoringOrNight,
                }).ToList()
            }).ToList();







            return OperationResult<IEnumerable<AppointmentDto>>.Success(result);


        }
    }
}
