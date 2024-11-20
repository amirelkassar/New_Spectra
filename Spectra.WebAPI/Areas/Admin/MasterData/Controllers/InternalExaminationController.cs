using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.InternalExaminations.Commands;
using Spectra.Application.MasterData.InternalExaminations.Services;
using Spectra.Domain.Shared.Constants.Permissions.Admin.MasterDataPermissons;

namespace Spectra.WebAPI.Areas.Admin.MasterData.Controllers
{

    [Authorize]
    public class InternalExaminationController : MasterDataController
    {
        private readonly IInternalExaminationService _internalExamination;

        public InternalExaminationController(IInternalExaminationService internalExamination)
        {
            _internalExamination = internalExamination;
        }

        [HttpGet]
        [Authorize(AdminInternalExaminationPermissions.ReadList)]
        public async Task<ActionResult> GetAllInternalExamination()
        {
            var internalExamination = await _internalExamination.GetAllInternalExamination();
            return Ok(internalExamination);
        }

        [HttpGet("id")]
        [Authorize(AdminInternalExaminationPermissions.ReadOne)]
        public async Task<ActionResult> GetOneInternalExamination(string id)
        {
            var internalExamination = await _internalExamination.GetInternalExaminationById(id);
            return Ok(internalExamination);
        }

        [HttpPost]
        [Authorize(AdminInternalExaminationPermissions.Create)]
        public async Task<ActionResult> CreateInternalExamination(CreateInternalExaminationCommand input)
        {
            var internalExamination = await _internalExamination.CreateInternalExamination(input);
            return Ok(internalExamination);
        }

        [HttpPut("id")]
        [Authorize(AdminInternalExaminationPermissions.Update)]
        public async Task<ActionResult> UpdateInternalExamination(string id, UpdateInternalExaminationCommand input)
        {
            var internalExamination = await _internalExamination.UpdateInternalExamination(id, input);
            return Ok(internalExamination);
        }

        [HttpDelete("id")]
        [Authorize(AdminInternalExaminationPermissions.Delete)]
        public async Task<ActionResult> DeleteInternalExamination(string id)
        {
            var internalExamination = await _internalExamination.DeleteInternalExamination(id);
            return Ok(internalExamination);
        }
    }
}
