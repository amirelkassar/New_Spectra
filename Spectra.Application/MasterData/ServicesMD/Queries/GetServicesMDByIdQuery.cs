using MediatR;
using Spectra.Application.MasterData.Drug;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Infrastructure.MasterData.ServicesMD;

namespace Spectra.Application.MasterData.ServicesMD.Queries
{

    public class GetServicesMDByIdQuery : IRequest<MasterDataServices>
    {
        public string Id { get; set; }
    }

    public class GetDrugsByIdQueryHandler : IRequestHandler<GetServicesMDByIdQuery, MasterDataServices>
    {
        private readonly IServiceMDRepository _serviceMRepository;




        public GetDrugsByIdQueryHandler(IServiceMDRepository serviceMRepository)
        {
            _serviceMRepository = serviceMRepository;

        }

        public async Task<MasterDataServices> Handle(GetServicesMDByIdQuery request, CancellationToken cancellationToken)
        {
            return await _serviceMRepository.GetByIdAsync(request.Id);
        }
    }
}
