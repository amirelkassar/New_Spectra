using MediatR;
using Microsoft.AspNetCore.Http.HttpResults;
using Spectra.Application.Clients;
using Spectra.Application.Messaging;
<<<<<<< HEAD
=======
using Spectra.Application.ScheduleAppointments.Appointments.Services;
>>>>>>> Admin-BackEnd
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.ScheduleAppointments.Appointments.Commands
{


    public class CreateAppointmentCommand : ICommand<OperationResult<string>>
    {
<<<<<<< HEAD
        public DateTime Daysdate { get; set; }
=======
        public DateTime DaysdDate { get; set; }
>>>>>>> Admin-BackEnd
        public string? AppointmentNotes { get; set; }
        public AppointmentType AppointmentType { get; set; }
        public string DoctorScheduleId { get; set; }
        public string ClientId { get; set; }
        public string DoctorId { get; set; }
        public MoringOrNight MoringOrNight { get; set; }
<<<<<<< HEAD
        public TimeOnly TimeOfAppoinment { get; set; }


=======
        public TimeOnly From { get; set; }

  
>>>>>>> Admin-BackEnd

    }

    public class CreateAppointmentCommandHandler : IRequestHandler<CreateAppointmentCommand, OperationResult<string>>
    {
        private readonly IAppointmentRepository _appointmentRepository;
        private readonly IClientRepository _clientRepository;
        public CreateAppointmentCommandHandler(IAppointmentRepository appointmentRepository , IClientRepository clientRepository )
        {
            _appointmentRepository = appointmentRepository;
            _clientRepository= clientRepository;
    }
        public async Task<OperationResult<string>> Handle(CreateAppointmentCommand request, CancellationToken cancellationToken)
        {
<<<<<<< HEAD
       var client=await _clientRepository.GetByIdAsync(request.ClientId);

       var bookedappointment=await _appointmentRepository.GetAllAsync(c=>c.Daysdate== request.Daysdate);


            if (bookedappointment != null)
            {
                foreach (var book in bookedappointment)
                {
                    // Check if the requested appointment time falls within an already booked time slot
                    if (request.TimeOfAppoinment >= book.From && request.TimeOfAppoinment < book.To)
=======
       //var client=await _clientRepository.GetByIdAsync(request.ClientId);

       var bookedappointment=await _appointmentRepository.GetAllAsyncA(c=>c.Daysdate== request.DaysdDate);


            if (bookedappointment.Items != null)
            {
                foreach (var book in bookedappointment.Items)
                {
                    // Check if the requested appointment time falls within an already booked time slot
                    if (request.From >= book.From && request.From < book.To)
>>>>>>> Admin-BackEnd
                    {
                      
                        throw new RequestErrorException("The requested time slot is already booked.");
                    }

                }
            }
            //logic to get the Client duration
            //var clientduration = client


            TimeSpan duration = TimeSpan.FromMinutes(30);
<<<<<<< HEAD
            var appointmentFinish = request.TimeOfAppoinment.Add(duration);
            var timeOfDay = GetTimeOfDay(appointmentFinish);

            var appointment = Appointment.Create(
                Ulid.NewUlid().ToString(),
                request.DoctorId,
                request.Daysdate,
=======
            var appointmentFinish = request.From.Add(duration);
            var timeOfDay = GetTimeOfDay(appointmentFinish);
            var appointment = Appointment.Create(
                Ulid.NewUlid().ToString(),
                request.DoctorId,
                request.DaysdDate,
>>>>>>> Admin-BackEnd
                request.AppointmentNotes,
                request.AppointmentType,
                request.DoctorScheduleId,
                request.ClientId,
                AppointmentStatus.Booked,
<<<<<<< HEAD
                request.TimeOfAppoinment,
                appointmentFinish,
                timeOfDay
=======
                request.From,
                appointmentFinish
                ,request.MoringOrNight
>>>>>>> Admin-BackEnd
                );


            await _appointmentRepository.AddAsync(appointment);
            return OperationResult<string>.Success(appointment.Id);



        }
        public MoringOrNight GetTimeOfDay(TimeOnly time)
        {
            if (time.Hour >= 6 && time.Hour < 12)
            {
                return MoringOrNight.Morning;
            }
            else
            {
                return MoringOrNight.Night;
            }
        }
    }

}
