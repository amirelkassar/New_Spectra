using MediatR;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.Settings.Articles.Commands
{
    public class DeleteArticlesCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }
    public class DeleteArticlesCommandHandler : IRequestHandler<DeleteArticlesCommand, OperationResult<Unit>>
    {
        private readonly IArticlesRepository _articlesRepository;
        private readonly IHellper _addPhoto;



        public DeleteArticlesCommandHandler(IArticlesRepository serviceMRepository, IHellper addPhoto)
        {
            _articlesRepository = serviceMRepository;
            _addPhoto = addPhoto;
        }

        public async Task<OperationResult<Unit>> Handle(DeleteArticlesCommand request, CancellationToken cancellationToken)
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
