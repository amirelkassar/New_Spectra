using MediatR;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Settings.Articles;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Settings.Articles;
using Spectra.Domain.Settings.Packages;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Settings.Packages.Queries
{

    public class GetAllPackagesQuery : IRequest<OperationResult<IEnumerable<Package>>>
    {

    }
    public class GetAllPackagesQueryHandler : IRequestHandler<GetAllPackagesQuery, OperationResult<IEnumerable<Package>>>
    {
        private readonly IPackagesRepository _packagesRepository;

        public GetAllPackagesQueryHandler(IPackagesRepository packagesRepository)
        {
            _packagesRepository = packagesRepository;
        }
        public async Task<OperationResult<IEnumerable<Package>>> Handle(GetAllPackagesQuery request, CancellationToken cancellationToken)
        {
            var entitiy = await _packagesRepository.GetAllAsync();
            return OperationResult<IEnumerable<Package>>.Success(entitiy);
        }
    }
}
