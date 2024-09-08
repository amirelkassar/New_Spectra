using MediatR;
using Spectra.Application.Clients;
using Spectra.Application.MasterData.Drug;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Domain.Clients;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Infrastructure.MasterData.ServicesMD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.ServicesMD.Queries
{

    public class GetAllServicesMDQuery : IRequest<IEnumerable<MasterDataServices>>
    {

    }
    public class GetAllServicesMDQueryHandler : IRequestHandler<GetAllServicesMDQuery, IEnumerable<MasterDataServices>>
    {
        private readonly IServiceMDRepository _serviceMRepository;
    



        public GetAllServicesMDQueryHandler(IServiceMDRepository serviceMRepository)
        {
            _serviceMRepository = serviceMRepository;
        
        }
        public async Task<IEnumerable<MasterDataServices>> Handle(GetAllServicesMDQuery request, CancellationToken cancellationToken)
        {
            var entitiy = await _serviceMRepository.GetAllAsync();
            return entitiy;
        }
    }
}
