using MediatR;
<<<<<<< HEAD
using Spectra.Application.MasterData.Drug;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Infrastructure.MasterData.ServicesMD;
=======
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;
>>>>>>> Admin-BackEnd

namespace Spectra.Application.MasterData.ServicesMD.Queries
{

    public class GetServicesMDByIdQuery : IRequest<OperationResult<MasterDataServices>>
    {
        public string Id { get; set; }
    }

    public class GetDrugsByIdQueryHandler : IRequestHandler<GetServicesMDByIdQuery, OperationResult<MasterDataServices>>
    {
        private readonly IServiceMDRepository _serviceMRepository;




        public GetDrugsByIdQueryHandler(IServiceMDRepository serviceMRepository)
        {
            _serviceMRepository = serviceMRepository;

        }

        public async Task<OperationResult<MasterDataServices>> Handle(GetServicesMDByIdQuery request, CancellationToken cancellationToken)
        {
        
                var entitiy = await _serviceMRepository.GetByIdAsync(request.Id) ;
                if (entitiy == null)
                {
                    throw new NotFoundException("Service", request.Id);
                }

                return OperationResult<MasterDataServices>.Success(entitiy);
            

        }
    }
}
