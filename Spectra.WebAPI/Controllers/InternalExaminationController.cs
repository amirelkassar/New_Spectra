using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.InternalExaminations.Commands;
using Spectra.Application.MasterData.InternalExaminations.Services;

namespace Spectra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InternalExaminationController : ControllerBase
    {
        private readonly IInternalExaminationService _internalExamination;

        public InternalExaminationController(IInternalExaminationService internalExamination)
        {
            _internalExamination = internalExamination;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllInternalExamination()
        {
            var internalExamination = await _internalExamination.GetAllInternalExamination();
            return Ok(internalExamination);
        }



        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneInternalExamination(string id)
        {
            var internalExamination = await _internalExamination.GetInternalExaminationById(id);
            return Ok(internalExamination);
        }
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreateinternalExamination([FromForm] CreateInternalExaminationCommand input)
        {

            var internalExamination = await _internalExamination.CreateInternalExamination(input);

            return Ok(internalExamination);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateInternalExamination(string id, [FromForm] UpdateInternalExaminationCommand input)
        {


            var internalExamination = await _internalExamination.UpdateInternalExamination(id, input);
            return Ok(internalExamination);
        }
        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteInternalExamination(string id)
        {
            var internalExamination = await _internalExamination.DeleteInternalExamination(id);
            return Ok(internalExamination);
        }

    }
}
