using System.Linq.Expressions;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
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
    public class GetAllServicesMDQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public ServiceTypes? ServiceType { get; set; }
        public string? Search { get; set; }
        public bool? FreeLancerOnly { get; set; }
        public bool? SpectraTeamOnly { get; set; }
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
            var query=await _serviceMRepository.GetQueryAsync(s => s.Id == s.Id);
            IEnumerable<PlatformService> services = null;
            if (!string.IsNullOrEmpty(request.Search))
            {
                request.Search = request.Search.ToLower().Trim();
                query.Where(s => s.EnName.ToLower().StartsWith(request.Search) || s.ArName.ToLower().StartsWith(request.Search));
            }
            if (request.ServiceType.HasValue)
            {
                query.Where(s => s.ServiceType == request.ServiceType);
            }
            if (request.FreeLancerOnly.HasValue && request.FreeLancerOnly.Value)
            {
                query.Where(s => s.EnableForFreeLancer == true);
            }
            else if (request.SpectraTeamOnly.HasValue && request.SpectraTeamOnly.Value)
            {
                query.Where(s => s.EnableForSpectraTeam == true);
            }
            var total = await query.LongCountAsync();
            var data = await query
                .OrderByDescending(s=>s.Id)
                .Skip(request.SkipCount)
                .Take(request.MaxCount)
                .ToArrayAsync();
            services = data.ToArray();
            var dtos = services.Adapt<IReadOnlyCollection<ServiceReadDto>>();
            foreach (var item in dtos.Where(i => !string.IsNullOrWhiteSpace(i.HeroImagePath)))
            {
                item.HeroImagePath = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, item.HeroImagePath), EndPointsRoutes.Services, _httpContextAccessor);
            }
            return OperationResult<PaginatedResult<ServiceReadDto>>.Success(new PaginatedResult<ServiceReadDto>(dtos, total, request.MaxCount));

        }
    }
}
