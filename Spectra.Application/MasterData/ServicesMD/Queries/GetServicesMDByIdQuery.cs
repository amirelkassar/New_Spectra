using MediatR;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.ServicesMD.Queries
{

    public class GetServicesMDByIdQuery : IRequest<OperationResult<PlatformService>>
    {
        public string Id { get; set; }
    }

    public class GetDrugsByIdQueryHandler : IRequestHandler<GetServicesMDByIdQuery, OperationResult<PlatformService>>
    {
        private readonly IServiceMDRepository _serviceMRepository;




        public GetDrugsByIdQueryHandler(IServiceMDRepository serviceMRepository)
        {
            _serviceMRepository = serviceMRepository;

        }

        public async Task<OperationResult<PlatformService>> Handle(GetServicesMDByIdQuery request, CancellationToken cancellationToken)
        {

            var entitiy = await _serviceMRepository.GetByIdAsync(request.Id);
            if (entitiy == null)
            {
                throw new NotFoundException("Service", request.Id);
            }

            return OperationResult<PlatformService>.Success(entitiy);


        }
    }
}
