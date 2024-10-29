using MediatR;
using Spectra.Application.Hellper;
using Spectra.Application.MedicalPatientProfiles;
using Spectra.Domain.MedicalPatientProfiles;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.MedicalStaff.Doctors.Queries
{

    public class GetAllClientsInDoctorProfileQuery : IRequest<OperationResult<PaginatedResult<MedicalPatientProfile>>>
    {

        public string DoctorId { get; set; }
        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 10;


    }

    public class GetAllClientsInDoctorProfileQueryHandler : IRequestHandler<GetAllClientsInDoctorProfileQuery, OperationResult<PaginatedResult<MedicalPatientProfile>>>
    {
        private readonly IMedicalPatientProfileRepository _medicalPatientProfileRepository;


        public GetAllClientsInDoctorProfileQueryHandler(IMedicalPatientProfileRepository medicalPatientProfileRepository)
        {
            _medicalPatientProfileRepository = medicalPatientProfileRepository;

        }
        public async Task<OperationResult<PaginatedResult<MedicalPatientProfile>>> Handle(GetAllClientsInDoctorProfileQuery request, CancellationToken cancellationToken)
        {


            var paginatedClient = await _medicalPatientProfileRepository.GetAllAsyncA(x => x.DoctorId == request.DoctorId, null, request.PageNumber, request.PageSize);



            return OperationResult<PaginatedResult<MedicalPatientProfile>>.Success(paginatedClient);
        }
    }
}
  
