using MediatR;
using Spectra.Domain.Settings.Articles;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Settings.Articles.Queries
{

    public class GetArticlesByIdQuery : IRequest<OperationResult<Article>>
    {
        public string Id { get; set; }
    }

    public class GetArticlesByIdQueryHandler : IRequestHandler<GetArticlesByIdQuery, OperationResult<Article>>
    {
        private readonly IArticlesRepository _articlesRepository;




        public GetArticlesByIdQueryHandler(IArticlesRepository serviceMRepository)
        {
            _articlesRepository = serviceMRepository;

        }

        public async Task<OperationResult<Article>> Handle(GetArticlesByIdQuery request, CancellationToken cancellationToken)
        {

            var entitiy = await _articlesRepository.GetByIdAsync(request.Id);

            return OperationResult<Article>.Success(entitiy);


        }
    }
}
