using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Drug.Queries
{
    public class GetAllDrugNamesQuery : IQuery<OperationResult<IEnumerable<BassMasterDataDto>>>
    {



        public class GetAllDrugNamesQueryHandler : IRequestHandler<GetAllDrugNamesQuery, OperationResult<IEnumerable<BassMasterDataDto>>>
        {
            private readonly IDrugRepository _drugRepository;

            public GetAllDrugNamesQueryHandler(IDrugRepository drugRepository)
            {
                _drugRepository = drugRepository;
            }

            public async Task<OperationResult<IEnumerable<BassMasterDataDto>>> Handle(GetAllDrugNamesQuery request, CancellationToken cancellationToken)
            {

                var Diagnose = await _drugRepository.GetAllAsync();

                var AllDiagnoseNames = Diagnose.Select(x => new BassMasterDataDto { Name = x.Name });

                return OperationResult<IEnumerable<BassMasterDataDto>>.Success(AllDiagnoseNames);


            }
        }
    }
}
