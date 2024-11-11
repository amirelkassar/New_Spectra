using MediatR;
using Spectra.Application.Settings.Packages.Commands;
using Spectra.Domain.Settings.Packages;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.Settings.Packages
{
    public interface IPackagesService
    {
        Task<OperationResult<string>> CreatePackages(CreatePackagesCommand input);
        Task<OperationResult<Unit>> DeletePackages(string id);
        Task<OperationResult<IEnumerable<Package>>> GetAllPackages();
        Task<OperationResult<Package>> GetPackagesMById(string id);
        Task<OperationResult<Unit>> UpdatePackages(string id, UpdatePackagesCommand input);
    }
}