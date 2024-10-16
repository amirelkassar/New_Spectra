using MediatR;
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

namespace Spectra.Application.MasterData.ServicesMD.Queries
{

    public class GetAllNameAndTermServicesQuery : IRequest<OperationResult<IEnumerable<ServicesDto>>>
    {

    }
    public class GetAllNameAndTermServicesQueryHandler : IRequestHandler<GetAllNameAndTermServicesQuery, OperationResult<IEnumerable<ServicesDto>>>
    {
        private readonly IServiceMDRepository _serviceMRepository;




        public GetAllNameAndTermServicesQueryHandler(IServiceMDRepository serviceMRepository)
        {
            _serviceMRepository = serviceMRepository;

        }
        public async Task<OperationResult<IEnumerable<ServicesDto>>> Handle(GetAllNameAndTermServicesQuery request, CancellationToken cancellationToken)
        {


            var entity = await _serviceMRepository.GetAllAsync();

            var allServicesNamesandTerms = entity
    .Where(x => x.AvailableSrvices == AvailableSrvice.ServicesView)
    .Select(x => new ServicesDto
    {
        Name = x.Name,
        TermsAndConditions = x.TermsAndConditions,

    });


            return OperationResult<IEnumerable<ServicesDto>>.Success(allServicesNamesandTerms);

        }
    }
}
