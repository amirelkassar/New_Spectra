using MediatR;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.Settings.SuccessStorIes.Commands
{
    public class DeleteSuccessStoryCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }
    public class DeleteArticlesCommandHandler : IRequestHandler<DeleteSuccessStoryCommand, OperationResult<Unit>>
    {
        private readonly ISuccessStorIesRepository _successStorIesRepository;
        private readonly IDocumentHellper _addPhoto;



        public DeleteArticlesCommandHandler(ISuccessStorIesRepository successStorIesRepository, IDocumentHellper addPhoto)
        {
            _successStorIesRepository = successStorIesRepository;
            _addPhoto = addPhoto;
        }

        public async Task<OperationResult<Unit>> Handle(DeleteSuccessStoryCommand request, CancellationToken cancellationToken)
        {

            var entity = await _successStorIesRepository.GetByIdAsync(request.Id);

            await _addPhoto.DeleteAttachment(entity.ChiledPhotoAfter);
            await _addPhoto.DeleteAttachment(entity.ChiledPhotoBefore);
            await _addPhoto.DeleteAttachment(entity.FamilyPhoto);
            var PathesPhotos = entity.SectionStory.Select(x => x.AttachmentPath).ToList();

            await _addPhoto.DeleteAttachments(PathesPhotos);
            await _successStorIesRepository.DeleteAsync(entity);
            return OperationResult<Unit>.Success(Unit.Value);

        }
    }

}
