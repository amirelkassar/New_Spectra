using MediatR;
using Spectra.Application.MasterData.ServicesMD.Commands;
using Spectra.Application.Settings.Packages.Commands;
using Spectra.Application.Settings.Packages.Queries;
using Spectra.Domain.Settings.Packages;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.Settings.Packages
{
    public class PackagesService : IPackagesService
    {
        private readonly IMediator _mediator;

        public PackagesService(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<OperationResult<string>> CreatePackages(CreatePackagesCommand input)
        {


            var command = new CreatePackagesCommand
            {
                ContentPackage = input.ContentPackage,
                Name = input.Name,
                Photo = input.Photo,
                PointOfPackage = input.PointOfPackage,
                Price = input.Price
            };

            return await _mediator.Send(command);
        }


        public async Task<OperationResult<Unit>> UpdatePackages(string id, UpdatePackagesCommand input)
        {

            var command = new UpdatePackagesCommand
            {
                Id = id,
                ContentPackage = input.ContentPackage,
                Name = input.Name,
                Photo = input.Photo,
                PointOfPackage = input.PointOfPackage,
                Price = input.Price
            };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult<Unit>> DeletePackages(string id)
        {
            var command = new DeleteServicesMCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult<Package>> GetPackagesMById(string id)
        {
            var query = new GetPackagesByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<IEnumerable<Package>>> GetAllPackages()
        {
            var query = new GetAllPackagesQuery();
            return await _mediator.Send(query);
        }

    }
}

