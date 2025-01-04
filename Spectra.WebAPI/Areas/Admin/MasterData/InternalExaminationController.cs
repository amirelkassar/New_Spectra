using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.InternalExaminations.Commands;
using Spectra.Application.MasterData.InternalExaminations.Queries;
using Spectra.Application.MasterData.InternalExaminations.Services;

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
        public async Task<ActionResult> GetAllInternalExamination([FromQuery] GetAllInternalExaminationQuery input)
        {
            var internalExamination = await _internalExamination.GetAllInternalExamination(input);
            return Ok(internalExamination);
        }

        [HttpGet()]
        public async Task<ActionResult> GetOneInternalExamination([FromQuery] GetInternalExaminationByIdQuery input)
        {
            var internalExamination = await _internalExamination.GetInternalExaminationById(input.Id);
            return Ok(internalExamination);
        }

        [HttpPost]
        public async Task<ActionResult> CreateInternalExamination([FromBody] CreateInternalExaminationCommand input)
        {
            var internalExamination = await _internalExamination.CreateInternalExamination(input);
            return Created("", internalExamination);
        }

        [HttpPut()]
        public async Task<ActionResult> UpdateInternalExamination([FromBody] UpdateInternalExaminationCommand input)
        {
            var internalExamination = await _internalExamination.UpdateInternalExamination(input);
            return Accepted(internalExamination);
        }

        [HttpDelete()]
        public async Task<ActionResult> DeleteInternalExamination([FromQuery] DeleteInternalExaminationCommand input)
        {
            var internalExamination = await _internalExamination.DeleteInternalExamination(input.Id);
            return NoContent();
        }
    }
}
