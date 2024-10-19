using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Queries
{
    public class GetAllMedicalTestsAndXrayNamesQuery : IQuery<OperationResult<IEnumerable<BassMasterDataDto>>>
    {



        public class GetAllMedicalTestsAndXrayNamesQueryHandler : IRequestHandler<GetAllMedicalTestsAndXrayNamesQuery, OperationResult<IEnumerable<BassMasterDataDto>>>
        {
            private readonly IMedicalTestsAndXrayRepository _medicalTestsAndXrayRepository;
            public GetAllMedicalTestsAndXrayNamesQueryHandler(IMedicalTestsAndXrayRepository medicalTestsAndXrayRepository)
            {

                _medicalTestsAndXrayRepository = medicalTestsAndXrayRepository;
            }

            public async Task<OperationResult<IEnumerable<BassMasterDataDto>>> Handle(GetAllMedicalTestsAndXrayNamesQuery request, CancellationToken cancellationToken)
            {

<<<<<<< HEAD

                var entitiy = await _medicalTestsAndXrayRepository.GetAllAsync();

                var entitiyName = entitiy.Select(x => new BassMasterDataDto { Name = x.ScientificName });
=======
                var entitiy = await _medicalTestsAndXrayRepository.GetAllAsync();

                var entitiyName = entitiy.Select(x => new BassMasterDataDto { Name = x.ScientificNameByEng });
>>>>>>> Admin-BackEnd

                return OperationResult<IEnumerable<BassMasterDataDto>>.Success(entitiyName);


            }
        }
    }
}
