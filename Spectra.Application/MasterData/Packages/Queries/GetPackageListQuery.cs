using Mapster;
using MediatR;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.MasterData.Packages;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Application.MasterData.Packages.Dtos;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace Spectra.Application.MasterData.Packages.Queries
{
    public class GetPackageListQuery : QueryPaginationParam,IRequest<OperationResult>
    {
        public string? Search { get; set; }

        public class GetPackageListQueryHandler(IBaseMongoDbRepository<Package> packageRepository,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment) : IRequestHandler<GetPackageListQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Package> _packageRepository = packageRepository;
            private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;
            private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;

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
                foreach (var dto in dtos)
                {
                    if (dto.PhotoPath is not null)
                    {
                        dto.PhotoPath= EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, dto.PhotoPath), EndPointsRoutes.Packages, _httpContextAccessor);
                    }
                }
                return OperationResult<PaginatedResult<PackageReadDto>>.Success(new PaginatedResult<PackageReadDto>(dtos, totalData, request.MaxCount));
            }
        }
    }
}
