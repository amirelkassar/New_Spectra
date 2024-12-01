using Mapster;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.ServicesMD.Dtos;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.ServicesMD.Queries
{
    public class GetAllServicesMDQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public ServiceTypes? ServiceType { get; set; }
        public string? Search { get; set; }
    }
    public class GetAllServicesMDQueryHandler(IBaseMongoDbRepository<PlatformService> serviceMRepository,
        IHttpContextAccessor httpContextAccessor,
        IWebHostEnvironment webHostEnvironment) : IRequestHandler<GetAllServicesMDQuery, OperationResult>
    {
        private readonly IBaseMongoDbRepository<PlatformService> _serviceMRepository = serviceMRepository;
        private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;
        private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;

        public async Task<OperationResult> Handle(GetAllServicesMDQuery request, CancellationToken cancellationToken)
        {
            IEnumerable<PlatformService> services = null;
            long totalData = 0;
            if (!string.IsNullOrEmpty(request.Search))
            {
                request.Search = request.Search.ToLower().Trim();
                var (data, total) = await _serviceMRepository.GetAllAsync(d => (request.ServiceType.HasValue ? d.ServiceType == request.ServiceType : d.ServiceType == d.ServiceType) && (d.EnName.ToLower().StartsWith(request.Search) || d.ArName.ToLower().StartsWith(request.Search)),
                null,
                request.SkipCount,
                request.MaxCount);
                totalData = total;
                services = data.ToArray();
            }
            else
            {
                var (data, total) = await _serviceMRepository.GetAllAsync(d => (request.ServiceType.HasValue ? d.ServiceType == request.ServiceType : d.ServiceType == d.ServiceType),
                    null,
                    request.SkipCount,
                    request.MaxCount);
                totalData = total;
                services = data.ToArray();
            }
            var dtos = services.Adapt<IReadOnlyCollection<ServiceReadDto>>();
            foreach (var item in dtos.Where(i => !string.IsNullOrWhiteSpace(i.HeroImagePath)))
            {
                item.HeroImagePath = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, item.HeroImagePath), EndPointsRoutes.Services, _httpContextAccessor);
            }
            return OperationResult<PaginatedResult<ServiceReadDto>>.Success(new PaginatedResult<ServiceReadDto>(dtos, totalData, request.MaxCount));

        }
    }
}
