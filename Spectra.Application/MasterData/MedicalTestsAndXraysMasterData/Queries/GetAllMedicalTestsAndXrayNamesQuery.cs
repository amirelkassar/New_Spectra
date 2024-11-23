using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Queries
{
    public class GetAllMedicalTestsAndXrayNamesQuery : IQuery<OperationResult<IEnumerable<BaseMasterDataDto>>>
    {



        public class GetAllMedicalTestsAndXrayNamesQueryHandler : IRequestHandler<GetAllMedicalTestsAndXrayNamesQuery, OperationResult<IEnumerable<BaseMasterDataDto>>>
        {
            private readonly IMedicalTestsAndXrayRepository _medicalTestsAndXrayRepository;
            public GetAllMedicalTestsAndXrayNamesQueryHandler(IMedicalTestsAndXrayRepository medicalTestsAndXrayRepository)
            {

                _medicalTestsAndXrayRepository = medicalTestsAndXrayRepository;
            }

            public async Task<OperationResult<IEnumerable<BaseMasterDataDto>>> Handle(GetAllMedicalTestsAndXrayNamesQuery request, CancellationToken cancellationToken)
            {

                var entitiy = await _medicalTestsAndXrayRepository.GetAllAsync();

                var entitiyName = entitiy.Select(x => new BaseMasterDataDto { Name = x.ScientificNameByEng, Id = x.Id });

                return OperationResult<IEnumerable<BaseMasterDataDto>>.Success(entitiyName);


            }
        }
    }
}
