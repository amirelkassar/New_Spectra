using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.GeneralComplaintsM.Commands;
using Spectra.Application.MasterData.GeneralComplaintsM.Queries;
using Spectra.Application.MasterData.GeneralComplaintsM.Services;
using Spectra.Domain.Shared.Constants.Permissions.Admin.MasterDataPermissons;

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
        [Authorize(AdminGeneralComplaintPermissions.ReadList)]
        public async Task<ActionResult> GetAllGeneralComplaints([FromQuery] GetAllGeneralComplaintsQuery input)
        {
            var GeneralComplaintsies = await _generalComplaintService.GetAllGeneralComplaintss(input);
            return Ok(GeneralComplaintsies);
        }

        [HttpGet()]
        [Authorize(AdminGeneralComplaintPermissions.ReadOne)]
        public async Task<ActionResult> GetOneGeneralComplaints([FromQuery] string id)
        {
            var GeneralComplaintsies = await _generalComplaintService.GetGeneralComplaintsById(id);
            return Ok(GeneralComplaintsies);
        }

        [HttpPost]
        [Authorize(AdminGeneralComplaintPermissions.Create)]
        public async Task<ActionResult> CreateGeneralComplaintss([FromBody] CreateGeneralComplaintsCommand input)
        {
            var GeneralComplaintsies = await _generalComplaintService.CreateGeneralComplaints(input);
            return Created("", GeneralComplaintsies);
        }

        [HttpPut()]
        [Authorize(AdminGeneralComplaintPermissions.Update)]
        public async Task<ActionResult> UpdateGeneralComplaints([FromBody] UpdateGeneralComplaintsCommand input)
        {
            var GeneralComplaintsies = await _generalComplaintService.UpdateGeneralComplaints(input);
            return Accepted(GeneralComplaintsies);
        }

        [HttpDelete()]
        [Authorize(AdminGeneralComplaintPermissions.Delete)]
        public async Task<ActionResult> DeleteGeneralComplaints([FromQuery] string id)
        {
            var GeneralComplaintsies = await _generalComplaintService.DeleteGeneralComplaints(id);
            return NoContent();
        }
        [HttpPost("bulk")]
        [Authorize(AdminGeneralComplaintPermissions.SheetsPermissions)]
        public async Task<ActionResult> UploadExcelFile([FromForm] BulkCreateModel input)
        {
            var data = _generalComplaintService.CreateFromExcel(input.File);
            return Created("", data);
        }

    }


}

