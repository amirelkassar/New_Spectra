using Mapster;
using MediatR;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.Sections.Dto;
using Spectra.Domain.MasterData.Sections;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Sections.Queries
{

    public class GetAllSectionsQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public string? Search { get; set; }
    }
    public class GetAllSectionsQueryHandler(IBaseMongoDbRepository<Section> sectionsRepository) : IRequestHandler<GetAllSectionsQuery, OperationResult>
    {
        private readonly IBaseMongoDbRepository<Section> _sectionsRepository = sectionsRepository;

        public async Task<OperationResult> Handle(GetAllSectionsQuery request, CancellationToken cancellationToken)
        {
            IEnumerable<Section> sections = null;
            long totalData = 0;
            if (!string.IsNullOrEmpty(request.Search))
            {
                request.Search = request.Search.ToLower().Trim();
                var (data, total) = await _sectionsRepository.GetAllAsync(d => d.EnName.ToLower().StartsWith(request.Search) || d.ArName.StartsWith(request.Search),
                null,
                request.SkipCount,
                request.MaxCount);

                totalData = total;
                sections = data.ToArray();
            }
            else
            {
                var (data, total) = await _sectionsRepository.GetAllAsync(null,
                    null,
                    request.SkipCount,
                    request.MaxCount);
                totalData = total;
                sections = data.ToArray();
            }
            var dtos = sections.Adapt<IReadOnlyCollection<SectionDto>>();
            return OperationResult<PaginatedResult<SectionDto>>.Success(new PaginatedResult<SectionDto>(dtos, totalData, request.MaxCount));
        }
    }
}
