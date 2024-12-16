using System.Linq.Expressions;
using Mapster;
using MediatR;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.ServicesMD.Dtos;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Helpers;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.ServicesMD.Queries
{
    public class GetAllServiceForListingQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public ServiceTypes? ServiceType { get; set; }
        public string? Search { get; set; }
        public bool? FreeLancerOnly { get; set; }
        public bool? SpectraTeamOnly { get; set; }
        public class GetAllServiceForListingQueryHandler(IBaseMongoDbRepository<PlatformService> serviceMRepository) : IRequestHandler<GetAllServiceForListingQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<PlatformService> _serviceMRepository = serviceMRepository;
            public async Task<OperationResult> Handle(GetAllServiceForListingQuery request, CancellationToken cancellationToken)
            {
                Expression<Func<PlatformService, bool>> expression = s => s.Id == s.Id;
                IEnumerable<PlatformService> services = null;
                long totalData = 0;
                if (!string.IsNullOrEmpty(request.Search))
                {
                    request.Search = request.Search.ToLower().Trim();
                    expression.And(s=>s.EnName.ToLower().StartsWith(request.Search) || s.ArName.ToLower().StartsWith(request.Search));
                }
                if (request.ServiceType.HasValue)
                {
                    expression.And(s=>s.ServiceType == request.ServiceType);
                }
                if(request.FreeLancerOnly.HasValue && request.FreeLancerOnly.Value)
                {
                    expression.And(s => s.EnableForFreeLancer == true);
                }
                else if(request.SpectraTeamOnly.HasValue && request.SpectraTeamOnly.Value)
                {
                    expression.And(s => s.EnableForSpectraTeam == true);
                }

                var (data, total) = await _serviceMRepository.GetAllAsync(expression,
                null,
                request.SkipCount,
                request.MaxCount);
                totalData = total;
                services = data.ToArray();
                var dtos = services.Adapt<IReadOnlyCollection<ServiceListReadDto>>();
                return OperationResult<PaginatedResult<ServiceListReadDto>>.Success(new PaginatedResult<ServiceListReadDto>(dtos, totalData, request.MaxCount));
            }
        }
    }
}