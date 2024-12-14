using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.GeneralComplaintsM.Commands;
using Spectra.Application.MasterData.GeneralComplaintsM.Queries;
using Spectra.Application.MasterData.GeneralComplaintsM.Services;

namespace Spectra.WebAPI.Areas.Admin.MasterData
{
    public class GeneralComplaintController : AdminBaseController
    {
        private readonly IGeneralComplaintService _generalComplaintService;

        public GeneralComplaintController(IGeneralComplaintService generalComplaintService)
        {
            _generalComplaintService = generalComplaintService;
        }

        [HttpGet("list")]
        public async Task<ActionResult> GetAllGeneralComplaints([FromQuery] GetAllGeneralComplaintsQuery input)
        {
            var GeneralComplaintsies = await _generalComplaintService.GetAllGeneralComplaintss(input);
            return Ok(GeneralComplaintsies);
        }

        [HttpGet()]
        public async Task<ActionResult> GetOneGeneralComplaints([FromQuery] GetGeneralComplaintsByIdQuery input)
        {
            var GeneralComplaintsies = await _generalComplaintService.GetGeneralComplaintsById(input.Id);
            return Ok(GeneralComplaintsies);
        }

        [HttpPost]
        public async Task<ActionResult> CreateGeneralComplaintss([FromBody] CreateGeneralComplaintsCommand input)
        {
            var GeneralComplaintsies = await _generalComplaintService.CreateGeneralComplaints(input);
            return Created("", GeneralComplaintsies);
        }

        [HttpPut()]
        public async Task<ActionResult> UpdateGeneralComplaints([FromBody] UpdateGeneralComplaintsCommand input)
        {
            var GeneralComplaintsies = await _generalComplaintService.UpdateGeneralComplaints(input);
            return Accepted(GeneralComplaintsies);
        }

        [HttpDelete()]
        public async Task<ActionResult> DeleteGeneralComplaints([FromQuery] DeleteGeneralComplaintsCommand input)
        {
            var GeneralComplaintsies = await _generalComplaintService.DeleteGeneralComplaints(input.Id);
            return NoContent();
        }
        [HttpPost("bulk")]
        public async Task<ActionResult> UploadExcelFile([FromForm] BulkCreateModel input)
        {
            var data = _generalComplaintService.CreateFromExcel(input.File);
            return Created("", data);
        }

    }


}

