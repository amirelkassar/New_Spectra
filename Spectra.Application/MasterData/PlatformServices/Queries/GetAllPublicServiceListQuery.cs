using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.ServicesMD.Dtos;
using Spectra.Application.MasterData.ServicesMD;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.PlatformServices.Dtos;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.MasterData.PlatformServices.Queries
{
    public class GetAllPublicServiceListQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public string? Search { get; set; }

        public class GetAllPublicServiceListQueryHandler(IBaseMongoDbRepository<PlatformService> serviceRepository,
                    IHttpContextAccessor httpContextAccessor,
        IWebHostEnvironment webHostEnvironment) : IRequestHandler<GetAllPublicServiceListQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<PlatformService> _serviceRepository = serviceRepository;
            private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;
            private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;

            public async Task<OperationResult> Handle(GetAllPublicServiceListQuery request, CancellationToken cancellationToken)
            {
                var (data, total) = await _serviceRepository.GetAllAsync(s => s.ServiceType == ServiceTypes.PublicService
                && (!string.IsNullOrWhiteSpace(request.Search) ? s.EnName.ToLower().Contains(request.Search.ToLower()) || s.ArName.Contains(request.Search.ToLower()) : s.Id == s.Id),
                null, request.SkipCount, request.MaxCount);

                var dtos = data.Adapt<IReadOnlyCollection<ServicePublicDto>>();
                foreach (var item in dtos.Where(i => !string.IsNullOrWhiteSpace(i.HeroImagePath)))
                {
                    item.HeroImagePath = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, item.HeroImagePath), EndPointsRoutes.Services, _httpContextAccessor);
                }
                return OperationResult<PaginatedResult<ServicePublicDto>>.Success(new PaginatedResult<ServicePublicDto>(dtos, total, request.MaxCount));
            }
        }
    }
}
