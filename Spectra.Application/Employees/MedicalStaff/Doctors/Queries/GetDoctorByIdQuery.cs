using MediatR;
using Spectra.Application.Employees.MedicalStaff.Doctors;
using Spectra.Domain.Employees.MedicalStaff.Doctor;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.MedicalStaff.Doctors.Queries
{
    public class GetDoctorByIdQuery : IRequest<OperationResult<Doctor>>
    {
        public string Id { get; set; }
    }

    public class GetDoctorByIdQueryHandler : IRequestHandler<GetDoctorByIdQuery, OperationResult<Doctor>>
    {
        private readonly IDoctorRepository _doctorRepository;

        public GetDoctorByIdQueryHandler(IDoctorRepository doctorRepository)
        {
            _doctorRepository = doctorRepository;

        }

        public async Task<OperationResult<Doctor>> Handle(GetDoctorByIdQuery request, CancellationToken cancellationToken)
        {




            var doctor = await _doctorRepository.GetByIdAsync(request.Id);




            return OperationResult<Doctor>.Success(doctor);
        }
    }
}
