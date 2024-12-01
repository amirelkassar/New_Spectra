using Mapster;
using MediatR;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.MasterData.Packages;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Application.MasterData.Packages.Dtos;

namespace Spectra.Application.MasterData.Packages.Queries
{
    public class GetPackageListQuery : QueryPaginationParam,IRequest<OperationResult>
    {
        public string? Search { get; set; }

        public class GetPackageListQueryHandler(IBaseMongoDbRepository<Package> packageRepository) : IRequestHandler<GetPackageListQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Package> _packageRepository = packageRepository;

            public async Task<OperationResult> Handle(GetPackageListQuery request, CancellationToken cancellationToken)
            {
                IEnumerable<Package> packages = null;
                long totalData = 0;
                if (!string.IsNullOrEmpty(request.Search))
                {
                    request.Search = request.Search.ToLower().Trim();
                    var (data, total) = await _packageRepository.GetAllAsync(d => d.EnName.ToLower().StartsWith(request.Search)||d.ArName.StartsWith(request.Search) ,
                    null,
                    request.SkipCount,
                    request.MaxCount);
                    totalData = total;
                    packages = data.ToArray();
                }
                else
                {
                    var (data, total) = await _packageRepository.GetAllAsync(null,
                        null,
                        request.SkipCount,
                        request.MaxCount);
                    totalData = total;
                    packages = data.ToArray();
                }
                var dtos = packages.Adapt<IReadOnlyCollection<PackageReadDto>>();
                return OperationResult<PaginatedResult<PackageReadDto>>.Success(new PaginatedResult<PackageReadDto>(dtos, totalData, request.MaxCount));
            }
        }
    }
}
