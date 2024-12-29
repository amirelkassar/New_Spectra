using Mapster;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using MongoDB.Driver;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.Packages.Dtos;
using Spectra.Domain.MasterData.Packages;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Packages.Queries
{
    public class GetPackageListQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public string? Search { get; set; }
        public ICollection<string>? Tags { get; set; }

        public class GetPackageListQueryHandler(IBaseMongoDbRepository<Package> packageRepository,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment) : IRequestHandler<GetPackageListQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Package> _packageRepository = packageRepository;
            private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;
            private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;

            public async Task<OperationResult> Handle(GetPackageListQuery request, CancellationToken cancellationToken)
            {
                var collection = await _packageRepository.GetCollectionAsync();
                var filterBuilder = Builders<Package>.Filter;
                var filter = filterBuilder.Empty;
                if (!string.IsNullOrEmpty(request.Search))
                {
                    var searchLower = request.Search.ToLower().Trim();
                    var searchFilter = filterBuilder.Or(
                        filterBuilder.Regex(s => s.EnName, new MongoDB.Bson.BsonRegularExpression($".*{searchLower}", "i")),
                        filterBuilder.Regex(s => s.ArName, new MongoDB.Bson.BsonRegularExpression($".*{searchLower}", "i"))
                    );
                    filter &= searchFilter;
                }
                if (request.Tags != null && request.Tags.Any())
                {
                    var tagsFilter = filterBuilder.AnyIn(s => s.Tags, request.Tags);
                    filter &= tagsFilter;
                }
                var total = await collection.CountDocumentsAsync(filter);
                var data = await collection.Find(filter)
                    .SortByDescending(s => s.Id)
                    .Skip(request.SkipCount)
                    .Limit(request.MaxCount)
                    .ToListAsync(cancellationToken);
                var dtos = data.Adapt<IReadOnlyCollection<PackageReadDto>>();
                foreach (var dto in dtos)
                {
                    if (dto.PhotoPath is not null)
                    {
                        dto.PhotoPath = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, dto.PhotoPath), EndPointsRoutes.Packages, _httpContextAccessor);
                    }
                }
                return OperationResult<PaginatedResult<PackageReadDto>>.Success(new PaginatedResult<PackageReadDto>(dtos, total, request.MaxCount));
            }
        }
    }
}
