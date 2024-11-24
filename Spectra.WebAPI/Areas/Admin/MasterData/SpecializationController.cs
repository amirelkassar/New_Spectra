using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.SpecializationCommend.Commands;
using Spectra.Application.MasterData.SpecializationCommend.Queries;
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

        [HttpGet("list")]
        [Authorize(AdminSpecializationPermissions.ReadList)]
        public async Task<ActionResult> GetAllSpecializations([FromQuery] GetAllSpecializationQuery input)
        {
            var specializations = await _specializationsServices.GetAllSpecializations(input);
            return Ok(specializations);
        }

        [HttpGet()]
        [Authorize(AdminSpecializationPermissions.ReadOne)]
        public async Task<ActionResult> GetOneSpecialization([FromQuery] GetSpecializationByIdQuery input)
        {
            var specialization = await _specializationsServices.GetSpecializationById(input.Id);
            return Ok(specialization);
        }

        [HttpPost]
        [Authorize(AdminSpecializationPermissions.Create)]
        public async Task<ActionResult> CreateSpecialization([FromBody] CreateSpecializationCommand input)
        {
            var specialization = await _specializationsServices.CreateSpecialization(input);
            return Created("", specialization);
        }

        [HttpPost("bulk")]
        [Authorize(AdminSpecializationPermissions.Create)]
        public async Task<ActionResult> CreateExcelFile(BulkCreateModel input)
        {
            var data = _specializationsServices.CreateFromExcel(input.File);
            return Created("", data);
        }

        [HttpPut()]
        [Authorize(AdminSpecializationPermissions.Update)]
        public async Task<ActionResult> UpdateSpecialization([FromBody] UpdateSpecializationCommand input)
        {
            var specialization = await _specializationsServices.UpdateSpecialization(input);
            return Accepted(specialization);
        }

        [HttpDelete()]
        [Authorize(AdminSpecializationPermissions.Delete)]
        public async Task<ActionResult> DeleteSpecialization([FromQuery] DeleteSpecializationCommand input)
        {
            var specialization = await _specializationsServices.DeleteSpecialization(input.Id);
            return NoContent();
        }
    }

}

