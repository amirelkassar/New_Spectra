using MediatR;
using Spectra.Application.Hellper;
using Spectra.Application.ScheduleAppointments.Appointments;
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.Admin.Queries
{

    public class GetAllAppointmentDoctorQuery : IRequest<OperationResult<PaginatedResult<Appointment>>>
    {

        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 10;
    }

    public class GetAllAppointmentsDoctorQueryHandler : IRequestHandler<GetAllAppointmentDoctorQuery, OperationResult<PaginatedResult<Appointment>>>
    {
        private readonly IAppointmentRepository _appointmentRepository;


        public GetAllAppointmentsDoctorQueryHandler(IAppointmentRepository appointmentRepository)
        {
            _appointmentRepository = appointmentRepository;
        }

        public async Task<OperationResult<PaginatedResult<Appointment>>> Handle(GetAllAppointmentDoctorQuery request, CancellationToken cancellationToken)
        {


            var paginatedAppointments = await _appointmentRepository.GetAllAsyncA(pageNumber: request.PageNumber,
              pageSize: request.PageSize
              );




            return OperationResult<PaginatedResult<Appointment>>.Success(paginatedAppointments);
        }
    }

}
