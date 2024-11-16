using MediatR;
using Spectra.Application.Settings.Articles;
using Spectra.Domain.Settings.Articles;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Settings.AdvertisingBanners.Queries
{

    public class GetAdvertisingBannerByIdQuery : IRequest<OperationResult<Article>>
    {
        public string Id { get; set; }
    }

    public class GetArticlesByIdQueryHandler : IRequestHandler<GetAdvertisingBannerByIdQuery, OperationResult<Article>>
    {
        private readonly IArticlesRepository _articlesRepository;




        public GetArticlesByIdQueryHandler(IArticlesRepository serviceMRepository)
        {
            _articlesRepository = serviceMRepository;

        }

        public async Task<OperationResult<Article>> Handle(GetAdvertisingBannerByIdQuery request, CancellationToken cancellationToken)
        {

            var entitiy = await _articlesRepository.GetByIdAsync(request.Id);

            return OperationResult<Article>.Success(entitiy);


        }
    }
}
