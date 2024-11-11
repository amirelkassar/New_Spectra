using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Settings.Packages.Commands
{
    public class UpdatePackagesCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Price { get; set; }
        public List<string> ContentPackage { get; set; }
        public List<string> PointOfPackage { get; set; }
        public IFormFile Photo { get; set; }



        public class UpdateArticlesCommandHandler : IRequestHandler<UpdatePackagesCommand, OperationResult<Unit>>
        {

            private readonly IPackagesRepository _packagesRepository;

            private readonly IHellper _addPhoto;




            public UpdateArticlesCommandHandler(IPackagesRepository packagesRepository, IHellper addPhoto)
            {
                _packagesRepository = packagesRepository;
                _addPhoto = addPhoto;
            }


            public async Task<OperationResult<Unit>> Handle(UpdatePackagesCommand request, CancellationToken cancellationToken)
            {
                var entity = await _packagesRepository.GetByIdAsync(request.Id);
                entity.Name = request.Name;
                entity.Price = request.Price;
                entity.PointOfPackage = request.PointOfPackage;
                entity.ContentPackage = request.ContentPackage;
                entity.ContentPackage = request.ContentPackage;
               
                if (request.Photo != null)
                {

                    entity.Photo = await _addPhoto.UpdateAttachment(entity.Photo, request.Photo, Pathes.PackagePhoto);


                }
         
                await _packagesRepository.UpdateAsync(entity);
                return OperationResult<Unit>.Success(Unit.Value);


            }

        }
    }
}
