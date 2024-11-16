using MediatR;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Settings.Articles;
using Spectra.Domain.Settings.Articles;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Settings.AdvertisingBanners.Queries
{

    public class GetAllAdvertisingBannerQuery : IRequest<OperationResult<IEnumerable<Article>>>
    {

    }
    public class GetAllArticlesQueryHandler : IRequestHandler<GetAllAdvertisingBannerQuery, OperationResult<IEnumerable<Article>>>
    {
        private readonly IArticlesRepository _articlesRepository;

        public GetAllArticlesQueryHandler(IArticlesRepository serviceMRepository, IHellper addPhoto)
        {
            _articlesRepository = serviceMRepository;
        }
        public async Task<OperationResult<IEnumerable<Article>>> Handle(GetAllAdvertisingBannerQuery request, CancellationToken cancellationToken)
        {
            var entitiy = await _articlesRepository.GetAllAsync();
            return OperationResult<IEnumerable<Article>>.Success(entitiy);
        }
    }
}
