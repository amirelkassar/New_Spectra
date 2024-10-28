using MediatR;
using MongoDB.Driver;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.MasterData.ServicesMD;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.Queries
{

    public class GetServicesContractQuery : IRequest<OperationResult<GetServicesContractQuery>>
    {
        public List<ServiesFromMasterDataDto> Services { get; set; }

        public double DurationFreelance { get; set; }
        public double DurationTeamSpectra { get; set; }
        public double PlatformFeeToFreelance { get; set; }
        public double PlatformFeeTeamSpectr { get; set; }

    }

    public class GetServicesContractQueryHandler : IRequestHandler<GetServicesContractQuery, OperationResult<GetServicesContractQuery>>
    {
        private readonly IServiceMDRepository _serviceMDRepository;

        public GetServicesContractQueryHandler(IServiceMDRepository serviceMDRepository)
        {
            _serviceMDRepository = serviceMDRepository;
        }

        public async Task<OperationResult<GetServicesContractQuery>> Handle(GetServicesContractQuery request, CancellationToken cancellationToken)
        {
   
            var services = await _serviceMDRepository.GetAllAsync();

          
            var serviceData = services.Select(x => new ServiesFromMasterDataDto
            {
                Name = x.Name,
                Price = x.Price,
                TermsAndConditions= x.TermsAndConditions
                
            }).ToList();

          
            var contractData = new GetServicesContractQuery
            {
                DurationFreelance = 15,   
                DurationTeamSpectra = 30,
                PlatformFeeToFreelance=50,
                PlatformFeeTeamSpectr=50,
                Services = serviceData     
            };

          
            return OperationResult<GetServicesContractQuery>.Success(contractData);
        }
    }
  
}
