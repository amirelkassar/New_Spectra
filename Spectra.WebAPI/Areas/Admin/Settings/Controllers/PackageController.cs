using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Settings.Packages.Commands;
using Spectra.Domain.Shared.Constants.Permissions.AdminSettings;
using Spectra.Infrastructure.Settings.Packages;

namespace Spectra.WebAPI.Areas.Admin.Settings.Controllers
{
    [Authorize]
    public class PackageController : SettingsController
    {
        private readonly IPackagesService _entityServices;

        public PackageController(IPackagesService entityServices)
        {
            _entityServices = entityServices;
        }

        [HttpGet]
        [Authorize(AdminPackagePermissions.ReadList)]
        public async Task<ActionResult> GetAllPackage()
        {
            var Packages = await _entityServices.GetAllPackages();
            return Ok(Packages);
        }

        [HttpGet("id")]
        [Authorize(AdminPackagePermissions.ReadOne)]
        public async Task<ActionResult> GetOnePackage(string id)
        {
            var Packages = await _entityServices.GetPackagesMById(id);
            return Ok(Packages);
        }

        [HttpPost]
        [Authorize(AdminPackagePermissions.Create)]
        public async Task<ActionResult> CreatePackage(CreatePackagesCommand input)
        {
            var Packages = await _entityServices.CreatePackages(input);
            return Ok(Packages);
        }

        [HttpPut("id")]
        [Authorize(AdminPackagePermissions.Update)]
        public async Task<ActionResult> UpdatePackage(string id, UpdatePackagesCommand input)
        {
            var Packages = await _entityServices.UpdatePackages(id, input);

            return Ok(Packages);
        }
        [HttpDelete("id")]
        [Authorize(AdminPackagePermissions.Delete)]
        public async Task<ActionResult> DeletePackage(string id)
        {
            var Packages = await _entityServices.DeletePackages(id);
            return Ok(Packages);
        }


    }

}
