using Mapster;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Hellper;
using Spectra.Application.MasterData.PlatformServices.Dtos;
using Spectra.Application.MasterData.ServicesMD;
using Spectra.Application.MasterData.ServicesMD.Dtos;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.PlatformServices.Queries
{
    public class GetPublicServiceByIdQuery : IRequest<OperationResult>
    {
        public string Id { get; set; }

        public class GetPublicServiceByIdQueryHandler(IServiceMDRepository serviceMRepository,
        IHttpContextAccessor httpContextAccessor,
        IWebHostEnvironment webHostEnvironment) : IRequestHandler<GetPublicServiceByIdQuery, OperationResult>
        {
            private readonly IServiceMDRepository _serviceMRepository = serviceMRepository;
            private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;
            private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;
            public async Task<OperationResult> Handle(GetPublicServiceByIdQuery request, CancellationToken cancellationToken)
            {
                var entitiy = await _serviceMRepository.GetByIdAsync(request.Id);
                if (entitiy == null)
                {
                    throw new NotFoundException("Service", request.Id);
                }
                var dto = entitiy.Adapt<ServicePublicDto>();
                if (!string.IsNullOrWhiteSpace(dto.HeroImagePath))
                    dto.HeroImagePath = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, entitiy.HeroImagePath), EndPointsRoutes.Services, _httpContextAccessor);
                return OperationResult<ServicePublicDto>.Success(dto);
            }
        }
    }
}
