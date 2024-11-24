using MediatR;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Queries
{

    public class GetAllMedicalTestsAndXraysQuery : IRequest<OperationResult<IEnumerable<MedicalTestAndXray>>>
    {

    }

    public class GetAllMedicalTestsAndXraysQueryHandler : IRequestHandler<GetAllMedicalTestsAndXraysQuery, OperationResult<IEnumerable<MedicalTestAndXray>>>
    {

        private readonly IMedicalTestsAndXrayRepository _medicalTestsAndXrayRepository;
        public GetAllMedicalTestsAndXraysQueryHandler(IMedicalTestsAndXrayRepository medicalTestsAndXrayRepository)
        {

            _medicalTestsAndXrayRepository = medicalTestsAndXrayRepository;
        }
        public async Task<OperationResult<IEnumerable<MedicalTestAndXray>>> Handle(GetAllMedicalTestsAndXraysQuery request, CancellationToken cancellationToken)
        {

            var medicalTestsAndXray = await _medicalTestsAndXrayRepository.GetAllAsync();

            return OperationResult<IEnumerable<MedicalTestAndXray>>.Success(medicalTestsAndXray);


        }
    }
}
