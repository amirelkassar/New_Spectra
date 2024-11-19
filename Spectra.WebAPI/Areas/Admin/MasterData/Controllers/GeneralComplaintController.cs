using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.GeneralComplaintsM.Commands;
using Spectra.Application.MasterData.GeneralComplaintsM.Services;
using Spectra.Domain.Shared.Constants.Permissions.MasterDataPermissons;

namespace Spectra.WebAPI.Areas.Admin.MasterData.Controllers
{

    public class GeneralComplaintController : MasterDataController
    {
        private readonly IGeneralComplaintService _generalComplaintService;

        public GeneralComplaintController(IGeneralComplaintService generalComplaintService)
        {
            _generalComplaintService = generalComplaintService;
        }



        [HttpGet]
        [Authorize(AdminGeneralComplaintPermissions.ReadList)]
        public async Task<ActionResult> GetAllGeneralComplaints()
        {
            var GeneralComplaintsies = await _generalComplaintService.GetAllGeneralComplaintss();
            return Ok(GeneralComplaintsies);
        }

        [HttpGet("GeneralComplaints")]
        [Authorize(AdminGeneralComplaintPermissions.ReadList)]
        public async Task<ActionResult> GetAllGeneralComplaintsNames()
        {
            var Drugies = await _generalComplaintService.GetAllGeneralComplaintNames();

            return Ok(Drugies);
        }
        [HttpGet("id")]
        [Authorize(AdminGeneralComplaintPermissions.ReadOne)]
        public async Task<ActionResult> GetOneGeneralComplaints(string id)
        {
            var GeneralComplaintsies = await _generalComplaintService.GetGeneralComplaintsById(id);
            return Ok(GeneralComplaintsies);
        }

        [HttpPost]
        [Authorize(AdminGeneralComplaintPermissions.Create)]
        public async Task<ActionResult> CreateGeneralComplaintss(CreateGeneralComplaintsCommand input)
        {


            var GeneralComplaintsies = await _generalComplaintService.CreateGeneralComplaints(input);
            return Ok(GeneralComplaintsies);
        }

        [HttpPut("id")]
        [Authorize(AdminGeneralComplaintPermissions.Update)]
        public async Task<ActionResult> UpdateGeneralComplaints(string id, UpdateGeneralComplaintsCommand input)
        {


            var GeneralComplaintsies = await _generalComplaintService.UpdateGeneralComplaints(id, input);
            return Ok(GeneralComplaintsies);
        }

        [HttpDelete("id")]
        [Authorize(AdminGeneralComplaintPermissions.Delete)]
        public async Task<ActionResult> DeleteGeneralComplaints(string id)
        {

            var GeneralComplaintsies = await _generalComplaintService.DeleteGeneralComplaints(id);
            return Ok(GeneralComplaintsies);
        }
        [HttpPost("upload")]
        [Authorize(AdminGeneralComplaintPermissions.SheetsPermissions)]
        public async Task<ActionResult> UploadExcelFile(IFormFile file)
        {


            var data = _generalComplaintService.CreateFromExcel(file);



            return Ok(data);
        }

    }


}

