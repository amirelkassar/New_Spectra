using MediatR;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.ServicesMD.Queries
{

    public class GetAllServicesMDQuery : IRequest<OperationResult<IEnumerable<MasterDataServices>>>
    {

    }
    public class GetAllServicesMDQueryHandler : IRequestHandler<GetAllServicesMDQuery, OperationResult<IEnumerable<MasterDataServices>>>
    {
        private readonly IServiceMDRepository _serviceMRepository;




        public GetAllServicesMDQueryHandler(IServiceMDRepository serviceMRepository)
        {
            _serviceMRepository = serviceMRepository;

        }
        public async Task<OperationResult<IEnumerable<MasterDataServices>>> Handle(GetAllServicesMDQuery request, CancellationToken cancellationToken)
        {

            var entitiy = await _serviceMRepository.GetAllAsync();

            return OperationResult<IEnumerable<MasterDataServices>>.Success(entitiy);

        }
    }
}
