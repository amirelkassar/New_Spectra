using MediatR;
using Spectra.Domain.Settings.Packages;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Settings.Packages.Queries
{

    public class GetPackagesByIdQuery : IRequest<OperationResult<Package>>
    {
        public string Id { get; set; }
    }

    public class GetPackagesByIdQueryHandler : IRequestHandler<GetPackagesByIdQuery, OperationResult<Package>>
    {
        private readonly IPackagesRepository _packagesRepository;

       
        public GetPackagesByIdQueryHandler(IPackagesRepository packagesRepository)
        {
            _packagesRepository = packagesRepository;

        }

        public async Task<OperationResult<Package>> Handle(GetPackagesByIdQuery request, CancellationToken cancellationToken)
        {

            var entitiy = await _packagesRepository.GetByIdAsync(request.Id);

            return OperationResult<Package>.Success(entitiy);


        }
    }
}
