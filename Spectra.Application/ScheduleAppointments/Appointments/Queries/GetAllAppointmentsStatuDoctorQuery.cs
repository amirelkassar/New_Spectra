using MediatR;
using Spectra.Application.Clients;
using Spectra.Application.MedicalStaff.Doctors;
using Spectra.Application.ScheduleAppointments.Appointments.DTO;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.ScheduleAppointments.Appointments.Queries
{
    public class GetAllAppointmentsStatuDoctorQuery : IRequest<OperationResult<IEnumerable<AppointmentWithClientDto>>>
    {
        public AppointmentStatus Status { get; set; }
        public string DoctorId { get; set; }
        //public TimeOnly TimeOfAppoinment { get; set; }
        
    }

    public class GetAllAppointmentsStatuDoctorQueryHandler : IRequestHandler<GetAllAppointmentsStatuDoctorQuery, OperationResult<IEnumerable<AppointmentWithClientDto>>>
    {
        private readonly IAppointmentRepository _appointmentRepository;

        private readonly IDoctorRepository _doctorRepository;
        private readonly IClientRepository _clientRepository;
        public GetAllAppointmentsStatuDoctorQueryHandler(IAppointmentRepository appointmentRepository, IDoctorRepository doctorRepository, IClientRepository clientRepository)
        {
            _appointmentRepository = appointmentRepository;
            _doctorRepository = doctorRepository;
            _clientRepository = clientRepository;
        }

        public async Task<OperationResult<IEnumerable<AppointmentWithClientDto>>> Handle(GetAllAppointmentsStatuDoctorQuery request, CancellationToken cancellationToken)
        {

            var doctor = await _doctorRepository.GetByIdAsync(request.DoctorId);


            if (doctor == null)
            {
                throw new NotFoundException("Doctors", request.DoctorId);
            }



            var appointments = await _appointmentRepository.GetAllAsyncA(c => c.Status == request.Status && c.DoctorId == request.DoctorId && c.ClientId != null);

            var clientIds = appointments.Items. Select(c => c.ClientId).ToList();

            var clients = await _clientRepository.GetAllAsync(d => clientIds.Contains(d.Id));

            var result = clients.Select(c => new AppointmentWithClientDto
            {
                ClientName = $"{c.Name.FirstName} {c.Name.LastName}",
                PatientNames = c.Patients?.Select(p => p.Name.FirstName).ToList() ?? new List<string>(),
                PatientCount = c.Patients?.Count() ?? 0,
                Appointments = appointments.Items. Where(d => d.ClientId == c.Id).Select(X => new AppointmentDetailDto
                {
                    DateOfAppointment=X.Daysdate,
                    TimeOfAppoinment= X.From                    
                }).ToList()
            });

            return OperationResult<IEnumerable<AppointmentWithClientDto>>.Success(result);



        }
    }


}
