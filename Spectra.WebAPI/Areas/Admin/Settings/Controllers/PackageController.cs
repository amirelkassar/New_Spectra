using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Settings.Packages.Commands;
using Spectra.Infrastructure.Settings.Packages;

namespace Spectra.WebAPI.Areas.Admin.Settings.Controllers
{
    public class PackageController : SettingsController
    {
        private readonly IPackagesService _entityServices;

        public PackageController(IPackagesService entityServices)
        {
            _entityServices = entityServices;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllPackage()
        {
            var Packages = await _entityServices.GetAllPackages();
            return Ok(Packages);
        }

        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOnePackage(string id)
        {
            var Packages = await _entityServices.GetPackagesMById(id);
            return Ok(Packages);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreatePackage(CreatePackagesCommand input)
        {
            var Packages = await _entityServices.CreatePackages(input);
            return Ok(Packages);
        }

        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdatePackage(string id, UpdatePackagesCommand input)
        {
            var Packages = await _entityServices.UpdatePackages(id, input);

            return Ok(Packages);
        }
        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeletePackage(string id)
        {
            var Packages = await _entityServices.DeletePackages(id);
            return Ok(Packages);
        }


    }

}
