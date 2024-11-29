using Mapster;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Hellper;
using Spectra.Application.MasterData.ServicesMD.Dtos;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.ServicesMD.Queries
{

    public class GetServicesMDByIdQuery : IRequest<OperationResult>
    {
        public string Id { get; set; }
    }

    public class GetDrugsByIdQueryHandler(IServiceMDRepository serviceMRepository,
        IHttpContextAccessor httpContextAccessor,
        IWebHostEnvironment webHostEnvironment) : IRequestHandler<GetServicesMDByIdQuery, OperationResult>
    {
        private readonly IServiceMDRepository _serviceMRepository = serviceMRepository;
        private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;
        private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;

        public async Task<OperationResult> Handle(GetServicesMDByIdQuery request, CancellationToken cancellationToken)
        {
            var entitiy = await _serviceMRepository.GetByIdAsync(request.Id);
            if (entitiy == null)
            {
                throw new NotFoundException("Service", request.Id);
            }
            var dto = entitiy.Adapt<ServiceReadDto>();
            if(!string.IsNullOrWhiteSpace(dto.HeroImagePath))
            dto.HeroImagePath = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, entitiy.HeroImagePath), EndPointsRoutes.Services, _httpContextAccessor);
            return OperationResult<ServiceReadDto>.Success(dto);


        }
    }
}
