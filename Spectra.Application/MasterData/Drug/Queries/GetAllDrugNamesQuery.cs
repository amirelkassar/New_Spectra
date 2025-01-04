using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Drug.Queries
{
    public class GetAllDrugNamesQuery : QueryPaginationParam, IQuery<OperationResult>
    {
        public string? Search { get; set; }
        public class GetAllDrugNamesQueryHandler(IBaseMongoDbRepository<Domain.MasterData.Drug.Drug> drugRepository,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment) : IRequestHandler<GetAllDrugNamesQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Domain.MasterData.Drug.Drug> _drugRepository = drugRepository;
            private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;
            private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;

            public async Task<OperationResult> Handle(GetAllDrugNamesQuery request, CancellationToken cancellationToken)
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

                var drugNames = drugs.Select(d => new BaseMasterDataDto { Id = d.Id, Name = d.Name, ImageLink = d.ImagePath is not null ? EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, d.ImagePath), EndPointsRoutes.Drugs, _httpContextAccessor) : "" });

                return OperationResult<PaginatedResult<BaseMasterDataDto>>.Success(new PaginatedResult<BaseMasterDataDto>(drugNames.ToArray(), totalData, request.MaxCount));


            }
        }
    }
}
