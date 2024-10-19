using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.GeneralComplaintsM.Queries
{
    public class GetAllGeneralComplaintNameQuery : IQuery<OperationResult<IEnumerable<BassMasterDataDto>>>
    {



        public class GetAllGeneralComplaintNameQueryHandler : IRequestHandler<GetAllGeneralComplaintNameQuery, OperationResult<IEnumerable<BassMasterDataDto>>>
        {
            private readonly IGeneralComplaintRepository _generalComplaintRepository;

            public GetAllGeneralComplaintNameQueryHandler(IGeneralComplaintRepository generalComplaintRepository)
            {

                _generalComplaintRepository = generalComplaintRepository;
            }

            public async Task<OperationResult<IEnumerable<BassMasterDataDto>>> Handle(GetAllGeneralComplaintNameQuery request, CancellationToken cancellationToken)
            {


                var entity = await _generalComplaintRepository.GetAllAsync();

                var entitiesNames = entity.Select(x => new BassMasterDataDto { Name = x.ComplaintName });

                return OperationResult<IEnumerable<BassMasterDataDto>>.Success(entitiesNames);


            }
        }
    }
}
