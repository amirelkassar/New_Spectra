using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Drug.Queries
{

    public class GetAllDrugQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public string? Search { get; set; }
    }
    public class GetAllDrugeQueryHandler(IBaseMongoDbRepository<Domain.MasterData.Drug.Drug> drugRepository,
        IHttpContextAccessor httpContextAccessor,
        IWebHostEnvironment webHostEnvironment) : IRequestHandler<GetAllDrugQuery, OperationResult>
    {
        private readonly IBaseMongoDbRepository<Domain.MasterData.Drug.Drug> _drugRepository = drugRepository;
        private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;
        private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;

        public async Task<OperationResult> Handle(GetAllDrugQuery request, CancellationToken cancellationToken)
        {
            ICollection<Domain.MasterData.Drug.Drug> drugs = null;
            long totalData = 0;
            if (!string.IsNullOrWhiteSpace(request.Search))
            {
                request.Search = request.Search.ToLower();
                var (data, total) = await _drugRepository.GetAllAsync(d => d.Name.ToLower().StartsWith(request.Search)
                || d.ActiveIngredient.ToLower().StartsWith(request.Search), null, request.SkipCount, request.MaxCount);

                drugs = data.ToArray();
                totalData = total;
            }
            else
            {
                var (data, total) = await _drugRepository.GetAllAsync(null, null, request.SkipCount, request.MaxCount);
                drugs = data.ToArray();
                totalData = total;
            }
            foreach (var drug in drugs.Where(d=>d.ImagePath is not null))
            {
                var filePath = Path.Combine(_webHostEnvironment.WebRootPath, drug.ImagePath);
                drug.ImagePath = EndPointsHelper.GetFileUrl(filePath, EndPointsRoutes.Drugs, _httpContextAccessor);
            }
            return OperationResult<PaginatedResult<Domain.MasterData.Drug.Drug>>.Success(new PaginatedResult<Domain.MasterData.Drug.Drug>(drugs, totalData, request.MaxCount));
        }
    }
}
