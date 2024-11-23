using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.SpecializationCommend.Commands;
using Spectra.Application.MasterData.SpecializationCommend.Services;
using Spectra.Domain.Shared.Constants.Permissions.Admin.MasterDataPermissons;

namespace Spectra.WebAPI.Areas.Admin.MasterData
{
    public class SpecializationController : AdminBaseController
    {
        private readonly ISpecializationService _specializationsServices;

        public SpecializationController(ISpecializationService specializationsServices)
        {
            _specializationsServices = specializationsServices;
        }

        [HttpGet]
        [Authorize(AdminSpecializationPermissions.ReadList)]
        public async Task<ActionResult> GetAllSpecializations()
        {
            var specializations = await _specializationsServices.GetAllSpecializations();
            return Ok(specializations);
        }

        [HttpGet("GetAllNames")]
        [Authorize(AdminSpecializationPermissions.ReadList)]
        public async Task<ActionResult> GetAllSpecializationsNames()
        {
            var specializationNames = await _specializationsServices.GetAllSpecializationsNames();
            return Ok(specializationNames);
        }

        [HttpGet("id")]
        [Authorize(AdminSpecializationPermissions.ReadOne)]
        public async Task<ActionResult> GetOneSpecialization(string id)
        {
            var specialization = await _specializationsServices.GetSpecializationById(id);
            return Ok(specialization);
        }

        [HttpPost]
        [Authorize(AdminSpecializationPermissions.Create)]
        public async Task<ActionResult> CreateSpecialization(CreateSpecializationCommand input)
        {
            var specialization = await _specializationsServices.CreateSpecialization(input);
            return Ok(specialization);
        }

        [HttpPost("upload")]
        [Authorize(AdminSpecializationPermissions.Create)]
        public async Task<ActionResult> UploadExcelFile(IFormFile file)
        {
            var data = _specializationsServices.CreateFromExcel(file);
            return Ok(data);
        }

        [HttpPut("id")]
        [Authorize(AdminSpecializationPermissions.Update)]
        public async Task<ActionResult> UpdateSpecialization(string id, UpdateSpecializationCommand input)
        {
            var specialization = await _specializationsServices.UpdateSpecialization(id, input);
            return Ok(specialization);
        }

        [HttpDelete("id")]
        [Authorize(AdminSpecializationPermissions.Delete)]
        public async Task<ActionResult> DeleteSpecialization(string id)
        {
            var specialization = await _specializationsServices.DeleteSpecialization(id);
            return Ok(specialization);
        }
    }

}

