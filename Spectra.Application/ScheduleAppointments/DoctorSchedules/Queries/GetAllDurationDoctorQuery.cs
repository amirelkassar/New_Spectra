//using MediatR;
//using Spectra.Application.MedicalStaff.Doctors;
//using Spectra.Application.ScheduleAppointments.Appointments;
//using Spectra.Domain.ScheduleAppointments;
//using Spectra.Domain.Shared.Common.Exceptions;
//using Spectra.Domain.Shared.Enums;
//using Spectra.Domain.Shared.Wrappers;
//using System.Linq;

//namespace Spectra.Application.ScheduleAppointments.DoctorSchedules.Queries
//{
//    public class GetAllDoctorSchedulesQuery : IRequest<OperationResult<IEnumerable<TimeOnly>>>
//    {
//        public string DoctorId { get; set; }
//        public DateTime Daysdate { get; set; }
//        public string DoctorScheduleId { get; set; }
//        public TimeOnly TimeOfAppoinment { get; set; }
//        public DaysOfWeeks Days { get; set; }
//        public AppointmentType AppointmentType { get; set; }


//    }

//    public class GetAllDoctorSchedulesQueryHandler : IRequestHandler<GetAllDoctorSchedulesQuery, OperationResult<IEnumerable<TimeOnly>>>
//    {
//        private readonly IDoctorScheduleRepository _doctorScheduleRepository;
//        private readonly IDoctorRepository _doctorRepository;
//        private readonly IAppointmentRepository _appointmentRepository;

//        public GetAllDoctorSchedulesQueryHandler(IDoctorScheduleRepository doctorScheduleRepository, IDoctorRepository doctorRepository , IAppointmentRepository appointmentRepository)
//        {
//            _doctorScheduleRepository = doctorScheduleRepository;
//            _doctorRepository = doctorRepository;
//            _appointmentRepository = appointmentRepository;
//        }

//        public async Task<OperationResult<IEnumerable<TimeOnly>>> Handle(GetAllDoctorSchedulesQuery request, CancellationToken cancellationToken)
//        {

//            var doctor = await _doctorRepository.GetByIdAsync(request.DoctorId);
      
           

//            var appointments = await _appointmentRepository.GetAllAsync(c => c.DoctorId == request.DoctorId && c.Daysdate == request.Daysdate.Date);
//            //var appointmentId =  appointment.Select(c => c.DoctorScheduleId);

//            var doctorSchedules = await _doctorScheduleRepository.GetAllAsync(ds =>
//          ds.DoctorId == request.DoctorId &&
//          ds.Days == request.Days);

//            // Step 4: Create a list of available slots (each slot is 30 minutes)
//            var availableSlots = new List<TimeOnly>();

//            foreach (var schedule in doctorSchedules)
//            {
//                var currentSlot = schedule.From;

//                while (currentSlot < schedule.To)
//                {
//                    bool isSlotAvailable = !appointments.Any(a =>
//                        a.From == currentSlot  // Checks if the time slot is already booked
//                    );

//                    if (isSlotAvailable)
//                    {
//                        availableSlots.Add(currentSlot);
//                    }

//                    // Move to the next 30-minute slot
//                    currentSlot = currentSlot.AddMinutes(30);
//                }
//            }


//            return OperationResult<IEnumerable<TimeOnly>>.Success(availableSlots);


//        }
//    }
//}
