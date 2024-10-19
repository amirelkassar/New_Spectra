using MediatR;
using Spectra.Domain.MedicalStaff.Doctor;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MedicalStaff.Doctors.Queries
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
