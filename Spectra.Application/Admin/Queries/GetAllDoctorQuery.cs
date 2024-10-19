//using MediatR;
//using Spectra.Application.Hellper;
//using Spectra.Application.MedicalStaff.Doctors;
//using Spectra.Application.ScheduleAppointments.Appointments;
//using Spectra.Domain.ScheduleAppointments;
//using Spectra.Domain.Shared.Common.Exceptions;
//using Spectra.Domain.Shared.Wrappers;


//namespace Spectra.Application.Admin.Queries
//{
//  public class GetAllDoctorQuery :  IRequest<OperationResult<IEnumerable<Doctor>>>
//    {
//        public string? Search { get; set; }

//    }

//    public class GetAllDoctorQueryHandler : IRequestHandler<GetAllDoctorQuery, OperationResult<IEnumerable<Doctor>>>
//    {
//        private readonly IDoctorRepository _doctorRepository;

//        public GetAllDoctorQueryHandler(IDoctorRepository doctorRepository)
//        {
//            _doctorRepository = doctorRepository;
//        }

//        public async Task<OperationResult<IEnumerable<Doctor>>> Handle(GetAllDoctorQuery request, CancellationToken cancellationToken)
//        {


//            var doctor = await _doctorRepository.GetAllAsync();

//            return OperationResult<IEnumerable<Doctor>>.Success(doctor);


//        }
//    }

//}
