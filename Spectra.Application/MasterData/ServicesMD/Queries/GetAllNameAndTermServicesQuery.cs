using MediatR;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

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
