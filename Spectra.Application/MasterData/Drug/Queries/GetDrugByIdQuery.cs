using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Drug.Queries
{

    public class GetDrugsByIdQuery : IRequest<OperationResult<Domain.MasterData.Drug.Drug>>
    {
        public string Id { get; set; }
    }

    public class GetDrugsByIdQueryHandler(IBaseMongoDbRepository<Domain.MasterData.Drug.Drug> drugRepository,
        IHttpContextAccessor httpContextAccessor,
        IWebHostEnvironment webHostEnvironment) : IRequestHandler<GetDrugsByIdQuery, OperationResult<Domain.MasterData.Drug.Drug>>
    {
        private readonly IBaseMongoDbRepository<Domain.MasterData.Drug.Drug> _drugRepository = drugRepository;
        private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;
        private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;

        public async Task<OperationResult<Domain.MasterData.Drug.Drug>> Handle(GetDrugsByIdQuery request, CancellationToken cancellationToken)
        {
            var entitiy = await _drugRepository.GetByIdAsync(request.Id);
            if(entitiy.ImagePath is not null)
            entitiy.ImagePath = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, entitiy.ImagePath), EndPointsRoutes.Drugs, _httpContextAccessor);
            return entitiy == null
                ? throw new NotFoundException("Drugs", request.Id)
                : OperationResult<Domain.MasterData.Drug.Drug>.Success(entitiy);
        }
    }
}
