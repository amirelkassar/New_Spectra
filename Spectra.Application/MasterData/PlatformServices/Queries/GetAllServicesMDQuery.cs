using Mapster;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using MongoDB.Driver;
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
        public bool? FreeLancerOnly { get; set; }
        public bool? SpectraTeamOnly { get; set; }
    }

    public class GetAllServicesMDQueryHandler : IRequestHandler<GetAllServicesMDQuery, OperationResult>
    {
        private readonly IBaseMongoDbRepository<PlatformService> _serviceMRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public GetAllServicesMDQueryHandler(
            IBaseMongoDbRepository<PlatformService> serviceMRepository,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            _serviceMRepository = serviceMRepository;
            _httpContextAccessor = httpContextAccessor;
            _webHostEnvironment = webHostEnvironment;
        }

        public async Task<OperationResult> Handle(GetAllServicesMDQuery request, CancellationToken cancellationToken)
        {
            var collection = await _serviceMRepository.GetCollectionAsync();
            var filterBuilder = Builders<PlatformService>.Filter;
            var filter = filterBuilder.Empty;

            if (!string.IsNullOrEmpty(request.Search))
            {
                var searchLower = request.Search.ToLower().Trim();
                var searchFilter = filterBuilder.Or(
                    filterBuilder.Regex(s => s.EnName, new MongoDB.Bson.BsonRegularExpression($"^{searchLower}", "i")),
                    filterBuilder.Regex(s => s.ArName, new MongoDB.Bson.BsonRegularExpression($"^{searchLower}", "i"))
                );
                filter &= searchFilter;
            }

            if (request.ServiceType.HasValue)
            {
                filter &= filterBuilder.Eq(s => s.ServiceType, request.ServiceType.Value);
            }

            if (request.FreeLancerOnly.HasValue && request.FreeLancerOnly.Value)
            {
                filter &= filterBuilder.Eq(s => s.EnableForFreeLancer, true);
            }
            else if (request.SpectraTeamOnly.HasValue && request.SpectraTeamOnly.Value)
            {
                filter &= filterBuilder.Eq(s => s.EnableForSpectraTeam, true);
            }

            var total = await collection.CountDocumentsAsync(filter);
            var data = await collection.Find(filter)
                .SortByDescending(s => s.Id)
                .Skip(request.SkipCount)
                .Limit(request.MaxCount)
                .ToListAsync(cancellationToken);

            var dtos = data.Adapt<IReadOnlyCollection<ServiceReadDto>>();
            foreach (var item in dtos.Where(i => !string.IsNullOrWhiteSpace(i.HeroImagePath)))
            {
                item.HeroImagePath = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, item.HeroImagePath), EndPointsRoutes.Services, _httpContextAccessor);
            }

            return OperationResult<PaginatedResult<ServiceReadDto>>.Success(new PaginatedResult<ServiceReadDto>(dtos, total, request.MaxCount));
        }
    }
}
