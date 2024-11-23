using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.GeneralComplaintsM.Queries
{
    public class GetAllGeneralComplaintNameQuery : IQuery<OperationResult<IEnumerable<BaseMasterDataDto>>>
    {



        public class GetAllGeneralComplaintNameQueryHandler : IRequestHandler<GetAllGeneralComplaintNameQuery, OperationResult<IEnumerable<BaseMasterDataDto>>>
        {
            private readonly IGeneralComplaintRepository _generalComplaintRepository;

            public GetAllGeneralComplaintNameQueryHandler(IGeneralComplaintRepository generalComplaintRepository)
            {

                _generalComplaintRepository = generalComplaintRepository;
            }

            public async Task<OperationResult<IEnumerable<BaseMasterDataDto>>> Handle(GetAllGeneralComplaintNameQuery request, CancellationToken cancellationToken)
            {


                var entity = await _generalComplaintRepository.GetAllAsync();

                var entitiesNames = entity.Select(x => new BaseMasterDataDto { Name = x.ComplaintName, Id = x.Id });

                return OperationResult<IEnumerable<BaseMasterDataDto>>.Success(entitiesNames);


            }
        }
    }
}
