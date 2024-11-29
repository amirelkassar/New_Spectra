using Mapster;
using MediatR;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.ServicesMD.Dtos;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.ServicesMD.Queries
{
    public class GetAllServiceForListingQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public string? Search { get; set; }
        public class GetAllServiceForListingQueryHandler(IBaseMongoDbRepository<PlatformService> serviceMRepository) : IRequestHandler<GetAllServiceForListingQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<PlatformService> _serviceMRepository = serviceMRepository;
            public async Task<OperationResult> Handle(GetAllServiceForListingQuery request, CancellationToken cancellationToken)
            {
                IEnumerable<PlatformService> services = null;
                long totalData = 0;
                if (!string.IsNullOrEmpty(request.Search))
                {
                    request.Search = request.Search.ToLower().Trim();
                    var (data, total) = await _serviceMRepository.GetAllAsync(d => d.EnName.ToLower().StartsWith(request.Search) || d.ArName.ToLower().StartsWith(request.Search),
                    null,
                    request.SkipCount,
                    request.MaxCount);
                    totalData = total;
                    services = data.ToArray();
                }
                else
                {
                    var (data, total) = await _serviceMRepository.GetAllAsync(null,
                        null,
                        request.SkipCount,
                        request.MaxCount);
                    totalData = total;
                    services = data.ToArray();
                }
                var dtos = services.Adapt<IReadOnlyCollection<ServiceListReadDto>>();
                return OperationResult<PaginatedResult<ServiceListReadDto>>.Success(new PaginatedResult<ServiceListReadDto>(dtos, totalData, request.MaxCount));
            }
        }
    }
}