//using MediatR;
//using Spectra.Application.Messaging;
//using Spectra.Application.ScheduleAppointments.Appointments;
//using Spectra.Domain.Appointments;
//using Spectra.Domain.Shared.Enums;
//using Spectra.Domain.Shared.Wrappers;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace Spectra.Application.ScheduleAppointments.Appointments.Commands
//{
//    public class UpdateClientAppointmentCommand : ICommand<OperationResult<Unit>>
//    {

//        public string Id { get; set; }
//        public DateTime ExaminationDate { get; set; }
//        public double Duration { get; set; }
//        public MoringOrNight MoringOrNight { get; set; }
//        public string DoctorId { get; set; }
//        public string ClientId { get; set; }
//        public AppointmentStatus Status { get; set; }
//        public AppointmentType AppointmentType { get; set; }
//        public string? AppointmentNotes { get; set; }
//    }

//    public class UpdateClientAppointmentCommandHandler : IRequestHandler<UpdateClientAppointmentCommand, OperationResult<Unit>>
//    {
//        private readonly IAppointmentRepository _appointmentRepository;
//        public UpdateClientAppointmentCommandHandler(IAppointmentRepository appointmentRepository)
//        {
//            _appointmentRepository = appointmentRepository;
//        }

//        public async Task<OperationResult<Unit>> Handle(UpdateClientAppointmentCommand request, CancellationToken cancellationToken)
//        {

//            var appointment = await _appointmentRepository.GetByIdAsync(request.Id);

//            appointment.Status = AppointmentStatus.Available;
//            appointment.ClientId = null;

//            await _appointmentRepository.UpdateAsync(appointment);

//            var newAppointment = Appointment.Create(
//               Ulid.NewUlid().ToString(),
//               request.ExaminationDate,
//               request.Duration,
//               request.MoringOrNight,
//               request.DoctorId,
//               request.ClientId,
//               AppointmentStatus.Booked,
//               request.AppointmentType,
//               request.AppointmentNotes
//               );


//            await _appointmentRepository.AddAsync(appointment);

//            return OperationResult<Unit>.Success(Unit.Value);


//        }
//    }
//}

