using MediatR;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Application.Settings.Articles;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.Settings.AdvertisingBanners.Commands
{
    public class DeleteAdvertisingBannerCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }
    public class DeleteArticlesCommandHandler : IRequestHandler<DeleteAdvertisingBannerCommand, OperationResult<Unit>>
    {
        private readonly IArticlesRepository _articlesRepository;
        private readonly IDocumentHellper _addPhoto;



        public DeleteArticlesCommandHandler(IArticlesRepository serviceMRepository, IDocumentHellper addPhoto)
        {
            _articlesRepository = serviceMRepository;
            _addPhoto = addPhoto;
        }

        public async Task<OperationResult<Unit>> Handle(DeleteAdvertisingBannerCommand request, CancellationToken cancellationToken)
        {

            var entity = await _articlesRepository.GetByIdAsync(request.Id);

            await _addPhoto.DeleteAttachment(entity.MainPhoto);
            var PathesPhotos = entity.Secations.Select(x => x.AttachmentPath).ToList();
            await _addPhoto.DeleteAttachments(PathesPhotos);

            await _articlesRepository.DeleteAsync(entity);
            return OperationResult<Unit>.Success(Unit.Value);

        }
    }

}
