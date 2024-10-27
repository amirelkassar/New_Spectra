using MediatR;
using MongoDB.Driver;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.Contracts.Repository;
using Spectra.Application.MasterData.ServicesMD;
using Spectra.Application.MasterData.ServicesMD.Services;
using Spectra.Domain.Contracts;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Contracts.Queries
{
    public class GetServicesContractQuery : IRequest<OperationResult<GetServicesAndDurationOFContractDto>>
    {
      

    }

    public class GetServicesContractQueryHandler : IRequestHandler<GetServicesContractQuery, OperationResult<GetServicesAndDurationOFContractDto>>
    {
        private readonly IContractRepository _contractRepository;
        private readonly IServiceMDRepository _serviceMDRepository;

        public GetServicesContractQueryHandler(IContractRepository contractRepository, IServiceMDRepository serviceMDRepository)
        {
            _contractRepository = contractRepository;
            _serviceMDRepository = serviceMDRepository;
        }

        public async Task<OperationResult<GetServicesAndDurationOFContractDto>> Handle(GetServicesContractQuery request, CancellationToken cancellationToken)
        {

            var contracts = await _serviceMDRepository.GetAllAsync();
        var servisedata=    contracts.Select(x => new ServiesFromMasterDataDto
            {
                name = x.Name,
                price = x.Price

            }).ToList();

            var contractData = new GetServicesAndDurationOFContractDto
            {
                DurationFreelance = 15,
                DurationTeamSpectra = 30,
                Servises = servisedata
            };
            //var Filtercontracts = contracts.Where(x => x.ContractCase != ContractCases.SAVE);

            return OperationResult<GetServicesAndDurationOFContractDto>.Success(contractData);


        }
    }
  
}
