using Mapster;
using MediatR;
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
                var dtos = data.Adapt<IReadOnlyCollection<ServiceListReadDto>>();
                return OperationResult<PaginatedResult<ServiceListReadDto>>.Success(new PaginatedResult<ServiceListReadDto>(dtos, total, request.MaxCount));
            }
        }
    }
}