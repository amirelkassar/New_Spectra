using Mapster;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.Packages.Dtos;
using Spectra.Domain.MasterData.Packages;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.Packages.Queries
{
    public class GetPackageByIdQuery : IRequest<OperationResult>
    {
        public string Id { get; set; }

        public class GetPackageByIdQueryHandler(IBaseMongoDbRepository<Package> packageRepository,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment) : IRequestHandler<GetPackageByIdQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Package> _packageRepository = packageRepository;
            private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;
            private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;

            public async Task<OperationResult> Handle(GetPackageByIdQuery request, CancellationToken cancellationToken)
            {
                var package = await _packageRepository.GetByIdAsync(request.Id) ?? throw new NotFoundException("Packages", request.Id);
                var dto = package.Adapt<PackageReadDto>();
                if (!string.IsNullOrWhiteSpace(dto.PhotoPath))
                {
                    dto.PhotoPath = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, dto.PhotoPath), EndPointsRoutes.Packages, _httpContextAccessor);
                }
                return OperationResult<PackageReadDto>.Success(dto);
            }
        }
    }
}
