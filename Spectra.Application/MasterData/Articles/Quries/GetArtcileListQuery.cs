using Mapster;
using MediatR;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.Articles.Dtos;
using Spectra.Domain.MasterData.Articles;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Articles.Quries
{
    public class GetArtcileListQuery : QueryPaginationParam, IRequest<OperationResult>
    {

        public class GetArtcileListQueryHandler(IBaseMongoDbRepository<Article> articleRepository) : IRequestHandler<GetArtcileListQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Article> _articleRepository = articleRepository;

            public async Task<OperationResult> Handle(GetArtcileListQuery request, CancellationToken cancellationToken)
            {
                var (articles, total) = await _articleRepository.GetAllAsync(null, null, request.SkipCount, request.MaxCount);
                var articleDtos = articles.Adapt<ICollection<ArticleReadDto>>();

                return OperationResult<PaginatedResult<ArticleReadDto>>.Success(new PaginatedResult<ArticleReadDto>(articleDtos, total, request.MaxCount));
            }
        }
    }
}
