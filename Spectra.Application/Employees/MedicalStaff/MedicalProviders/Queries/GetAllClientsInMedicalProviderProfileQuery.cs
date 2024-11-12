using MediatR;
using Spectra.Application.Hellper;
using Spectra.Domain.MedicalPatientProfiles;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Infrastructure.MedicalPatientProfiles;

namespace Spectra.Application.Employees.MedicalStaff.MedicalProviders.Queries
{

    public class GetAllClientsInMedicalProviderProfileQuery : IRequest<OperationResult<PaginatedResult<MedicalPatientProfile>>>
    {
        public string Id { get; set; }
        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 10;
    }

    public class GetAllClientsInDoctorProfileQueryHandler : IRequestHandler<GetAllClientsInMedicalProviderProfileQuery, OperationResult<PaginatedResult<MedicalPatientProfile>>>
    {
        private readonly IMedicalPatientProfileRepository _medicalPatientProfileRepository;


        public GetAllClientsInDoctorProfileQueryHandler(IMedicalPatientProfileRepository medicalPatientProfileRepository)
        {
            _medicalPatientProfileRepository = medicalPatientProfileRepository;

        }
        public async Task<OperationResult<PaginatedResult<MedicalPatientProfile>>> Handle(GetAllClientsInMedicalProviderProfileQuery request, CancellationToken cancellationToken)
        {


            var paginatedClient = await _medicalPatientProfileRepository.GetAllAsyncA(x => x.Id == request.Id, null, request.PageNumber, request.PageSize);



            return OperationResult<PaginatedResult<MedicalPatientProfile>>.Success(paginatedClient);
        }
    }
}

