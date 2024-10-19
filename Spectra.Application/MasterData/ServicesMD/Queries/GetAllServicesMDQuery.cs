using MediatR;
<<<<<<< HEAD
using Spectra.Application.Clients;
using Spectra.Application.MasterData.Drug;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData;
using Spectra.Domain.Clients;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Infrastructure.MasterData.ServicesMD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
=======
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Wrappers;
>>>>>>> Admin-BackEnd

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
