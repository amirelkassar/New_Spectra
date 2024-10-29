//using MediatR;
//using Spectra.Domain.MedicalPatientProfiles;
//using Spectra.Domain.Shared.Enums;
//using Spectra.Domain.Shared.Wrappers;

//namespace Spectra.Application.MedicalPatientProfiles.Queries
//{

//    public class GetAllMedicalPatientProfileQuery : IRequest<OperationResult<IEnumerable<MedicalPatientProfile>>>
//    {

//    }
//    public class GetAllMedicalPatientProfileQueryHandler : IRequestHandler<GetAllMedicalPatientProfileQuery, OperationResult<IEnumerable<MedicalPatientProfile>>>
//    {
//        private readonly IMedicalPatientProfileRepository _medicalPatientProfileRepository;




//        public GetAllMedicalPatientProfileQueryHandler(IMedicalPatientProfileRepository medicalPatientProfileRepository)
//        {
//            _medicalPatientProfileRepository = medicalPatientProfileRepository;

//        }

//        public async Task<OperationResult<IEnumerable<MedicalPatientProfile>>> Handle(GetAllMedicalPatientProfileQuery request, CancellationToken cancellationToken)
//        {


//            var entity = await _medicalPatientProfileRepository.GetAllAsync();

//            var allServicesNamesandTerms = entity
//    .Where(x => x.AvailableSrvices == AvailableSrvice.ServicesView)
//    .Select(x => new ServicesDto
//    {
//        Name = x.Name,
//        TermsAndConditions = x.TermsAndConditions,

//    });


//            return OperationResult<IEnumerable<ServicesDto>>.Success(allServicesNamesandTerms);

//        }
//    }
//}
