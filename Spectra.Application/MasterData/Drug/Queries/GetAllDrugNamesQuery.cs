using MediatR;
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
        public class GetAllDrugNamesQueryHandler : IRequestHandler<GetAllDrugNamesQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Domain.MasterData.Drug.Drug> _drugRepository;

            public GetAllDrugNamesQueryHandler(IBaseMongoDbRepository<Domain.MasterData.Drug.Drug> drugRepository)
            {
                _drugRepository = drugRepository;
            }

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

                var drugNames = drugs.Select(d => new BaseMasterDataDto { Id = d.Id, Name = d.Name });

                return OperationResult<PaginatedResult<BaseMasterDataDto>>.Success(new PaginatedResult<BaseMasterDataDto>(drugNames.ToArray(),totalData,request.MaxCount));


            }
        }
    }
}
