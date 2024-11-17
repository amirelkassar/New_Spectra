using MediatR;
using Spectra.Domain.Settings.Articles;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Settings.Articles.Queries
{

    public class GetAllArticlesQuery : IRequest<OperationResult<IEnumerable<Article>>>
    {

    }
    public class GetAllArticlesQueryHandler : IRequestHandler<GetAllArticlesQuery, OperationResult<IEnumerable<Article>>>
    {
        private readonly IArticlesRepository _articlesRepository;

        public GetAllArticlesQueryHandler(IArticlesRepository serviceMRepository)
        {
            _articlesRepository = serviceMRepository;
        }
        public async Task<OperationResult<IEnumerable<Article>>> Handle(GetAllArticlesQuery request, CancellationToken cancellationToken)
        {
            var entitiy = await _articlesRepository.GetAllAsync();
            return OperationResult<IEnumerable<Article>>.Success(entitiy);
        }
    }
}
