using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.InternalExaminations.Commands;
using Spectra.Application.MasterData.InternalExaminations.Queries;
using Spectra.Application.MasterData.InternalExaminations.Services;
using Spectra.Domain.Shared.Constants.Permissions.Admin.MasterDataPermissons;

namespace Spectra.WebAPI.Areas.Admin.MasterData
{

    [Authorize]
    public class InternalExaminationController : AdminBaseController
    {
        private readonly IInternalExaminationService _internalExamination;

        public InternalExaminationController(IInternalExaminationService internalExamination)
        {
            _internalExamination = internalExamination;
        }

        [HttpGet("list")]
        [Authorize(AdminInternalExaminationPermissions.ReadList)]
        public async Task<ActionResult> GetAllInternalExamination([FromQuery]GetAllInternalExaminationQuery input)
        {
            var internalExamination = await _internalExamination.GetAllInternalExamination(input);
            return Ok(internalExamination);
        }

        [HttpGet()]
        [Authorize(AdminInternalExaminationPermissions.ReadOne)]
        public async Task<ActionResult> GetOneInternalExamination([FromQuery] GetInternalExaminationByIdQuery input)
        {
            var internalExamination = await _internalExamination.GetInternalExaminationById(input.Id);
            return Ok(internalExamination);
        }

        [HttpPost]
        [Authorize(AdminInternalExaminationPermissions.Create)]
        public async Task<ActionResult> CreateInternalExamination([FromBody]CreateInternalExaminationCommand input)
        {
            var internalExamination = await _internalExamination.CreateInternalExamination(input);
            return Created("",internalExamination);
        }

        [HttpPut()]
        [Authorize(AdminInternalExaminationPermissions.Update)]
        public async Task<ActionResult> UpdateInternalExamination([FromBody]UpdateInternalExaminationCommand input)
        {
            var internalExamination = await _internalExamination.UpdateInternalExamination(input);
            return Accepted(internalExamination);
        }

        [HttpDelete()]
        [Authorize(AdminInternalExaminationPermissions.Delete)]
        public async Task<ActionResult> DeleteInternalExamination([FromQuery]DeleteInternalExaminationCommand input)
        {
            var internalExamination = await _internalExamination.DeleteInternalExamination(input.Id);
            return NoContent();
        }
    }
}
