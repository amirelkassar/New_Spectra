using MediatR;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Application.Settings.Articles;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.Settings.Packages.Commands
{
    public class DeletePackagesCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }
    public class DeletePackagesCommandHandler : IRequestHandler<DeletePackagesCommand, OperationResult<Unit>>
    {
        private readonly IPackagesRepository _packagesRepository;

        private readonly IHellper _addPhoto;




        public DeletePackagesCommandHandler(IPackagesRepository packagesRepository, IHellper addPhoto)
        {
            _packagesRepository = packagesRepository;
            _addPhoto = addPhoto;
        }

        public async Task<OperationResult<Unit>> Handle(DeletePackagesCommand request, CancellationToken cancellationToken)
        {

            var entity = await _packagesRepository.GetByIdAsync(request.Id);

            await _addPhoto.DeleteAttachment(entity.Photo);
            await _packagesRepository.DeleteAsync(entity);
            return OperationResult<Unit>.Success(Unit.Value);

        }
    }

}
