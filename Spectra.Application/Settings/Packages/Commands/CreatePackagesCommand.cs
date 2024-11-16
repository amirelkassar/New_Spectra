using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Settings.Packages;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.Settings.Packages.Commands
{
    public class CreatePackagesCommand : ICommand<OperationResult<string>>
    {
        public string Name { get; set; }
        public string Price { get; set; }
        public List<string> ContentPackage { get; set; }
        public List<string> PointOfPackage { get; set; }
        public IFormFile Photo { get; set; }
    }

    public class CreatePackagesCommandHandler : IRequestHandler<CreatePackagesCommand, OperationResult<string>>
    {
        private readonly IPackagesRepository _packagesRepository;

        private readonly IHellper _addPhoto;


  

        public CreatePackagesCommandHandler(IPackagesRepository packagesRepository, IHellper addPhoto)
        {
            _packagesRepository = packagesRepository;
            _addPhoto = addPhoto;
        }

        public async Task<OperationResult<string>> Handle(CreatePackagesCommand request, CancellationToken cancellationToken)
        {

            string photoPath = null;

            var uploadPhoto = await _addPhoto.CreateAttachment(request.Photo, Pathes.PackagePhoto);
            if (uploadPhoto != null)
            {
                photoPath = uploadPhoto;

            }

            var entity = Package.Create(

                Ulid.NewUlid().ToString(),
               request.Name,
               request.Price,
               request.ContentPackage,
               request.PointOfPackage,
               photoPath
                );
            await _packagesRepository.AddAsync(entity);

            return OperationResult<string>.Success(entity.Id);



        }
    }

}