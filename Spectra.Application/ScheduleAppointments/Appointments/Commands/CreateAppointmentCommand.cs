using MediatR;
using Spectra.Application.Clients;
using Spectra.Application.Messaging;
using Spectra.Domain.MedicalPatientProfiles;
using Spectra.Domain.Patients;
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Infrastructure.MedicalPatientProfiles;

namespace Spectra.Application.ScheduleAppointments.Appointments.Commands
{


    public class CreateAppointmentCommand : ICommand<OperationResult<string>>
    {
        public DateTime DaysdDate { get; set; }
        public string? AppointmentNotes { get; set; }
        public AppointmentType AppointmentType { get; set; }
        public string DoctorScheduleId { get; set; }
        public string ClientId { get; set; }
        public string DoctorId { get; set; }
        public string PatientId { get; set; }
        public MoringOrNight MoringOrNight { get; set; }
        public TimeOnly From { get; set; }


    }

    public class CreateAppointmentCommandHandler : IRequestHandler<CreateAppointmentCommand, OperationResult<string>>
    {
        private readonly IAppointmentRepository _appointmentRepository;
        private readonly IMedicalPatientProfileRepository _medicalPatientProfileRepository;
        private readonly IClientRepository _clientRepository;
        public CreateAppointmentCommandHandler(IAppointmentRepository appointmentRepository , IMedicalPatientProfileRepository medicalPatientProfileRepository , IClientRepository clientRepository)
        {
            _appointmentRepository = appointmentRepository;
            _medicalPatientProfileRepository = medicalPatientProfileRepository;
            _clientRepository = clientRepository;
        }
        public async Task<OperationResult<string>> Handle(CreateAppointmentCommand request, CancellationToken cancellationToken)
        {
            //var client=await _clientRepository.GetByIdAsync(request.ClientId);

            var bookedappointment = await _appointmentRepository.GetAllAsyncA(c => c.Daysdate == request.DaysdDate);


            if (bookedappointment.Items != null)
            {
                foreach (var book in bookedappointment.Items)
                {
                    // Check if the requested appointment time falls within an already booked time slot
                    if (request.From >= book.From && request.From < book.To)
                    {

                        throw new RequestErrorException("The requested time slot is already booked.");
                    }

                }
            }

            //logic to get the Client duration
            //var clientduration = client

            TimeSpan duration = TimeSpan.FromMinutes(30);
            var appointmentFinish = request.From.Add(duration);
            var timeOfDay = GetTimeOfDay(appointmentFinish);
            var appointment = Appointment.Create(
                Ulid.NewUlid().ToString(),
                request.DoctorId,
                request.DaysdDate,
                request.AppointmentNotes,
                request.AppointmentType,
                request.DoctorScheduleId,
                request.ClientId,
                AppointmentStatus.Booked,
                request.From,
                appointmentFinish
            , request.MoringOrNight
                );

            if (appointment != null)
            {

                var clientData = await _clientRepository.GetByIdAsync(request.ClientId);
                var patientData = clientData.Patients!.FirstOrDefault(x => x.Id == request.PatientId);
               
                var medicalPatientProfiles = MedicalPatientProfile.Create(Ulid.NewUlid().ToString(), request.DoctorId, request.PatientId, request.ClientId,
                    $"{clientData.Name.FirstName} {clientData.Name.LastName}", $"{patientData.Name.FirstName} {patientData.Name.LastName}"
                    );
                await _medicalPatientProfileRepository.AddAsync(medicalPatientProfiles);
            }

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
