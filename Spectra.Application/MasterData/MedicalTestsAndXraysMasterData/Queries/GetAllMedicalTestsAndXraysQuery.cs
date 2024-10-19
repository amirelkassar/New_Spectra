using MediatR;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Queries
{

    public class GetAllMedicalTestsAndXraysQuery : IRequest<OperationResult<IEnumerable<MedicalTestsAndXray>>>
    {

    }

    public class GetAllMedicalTestsAndXraysQueryHandler : IRequestHandler<GetAllMedicalTestsAndXraysQuery, OperationResult<IEnumerable<MedicalTestsAndXray>>>
    {

        private readonly IMedicalTestsAndXrayRepository _medicalTestsAndXrayRepository;
        public GetAllMedicalTestsAndXraysQueryHandler(IMedicalTestsAndXrayRepository medicalTestsAndXrayRepository)
        {

            _medicalTestsAndXrayRepository = medicalTestsAndXrayRepository;
        }
        public async Task<OperationResult<IEnumerable<MedicalTestsAndXray>>> Handle(GetAllMedicalTestsAndXraysQuery request, CancellationToken cancellationToken)
        {

            var medicalTestsAndXray = await _medicalTestsAndXrayRepository.GetAllAsync();

            return OperationResult<IEnumerable<MedicalTestsAndXray>>.Success(medicalTestsAndXray);


        }
    }
}
