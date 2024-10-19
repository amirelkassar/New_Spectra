using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.GeneralComplaintsM.Commands;
using Spectra.Application.MasterData.GeneralComplaintsM.Services;

namespace Spectra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GeneralComplaintController : ControllerBase
    {
        private readonly IGeneralComplaintService _generalComplaintService;

        public GeneralComplaintController(IGeneralComplaintService generalComplaintService)
        {
            _generalComplaintService = generalComplaintService;
        }



        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllGeneralComplaints()
        {
            var GeneralComplaintsies = await _generalComplaintService.GetAllGeneralComplaintss();
            return Ok(GeneralComplaintsies);
        }

        [HttpGet("GeneralComplaints")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllGeneralComplaintsNames()
        {
            var Drugies = await _generalComplaintService.GetAllGeneralComplaintNames();

            return Ok(Drugies);
        }
        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneGeneralComplaints(string id)
        {
            var GeneralComplaintsies = await _generalComplaintService.GetGeneralComplaintsById(id);
            return Ok(GeneralComplaintsies);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreateGeneralComplaintss(CreateGeneralComplaintsCommand input)
        {


            var GeneralComplaintsies = await _generalComplaintService.CreateGeneralComplaints(input);
            return Ok(GeneralComplaintsies);
        }

        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateGeneralComplaints(string id, UpdateGeneralComplaintsCommand input)
        {


            var GeneralComplaintsies = await _generalComplaintService.UpdateGeneralComplaints(id, input);
            return Ok(GeneralComplaintsies);
        }

        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteGeneralComplaints(string id)
        {

            var GeneralComplaintsies = await _generalComplaintService.DeleteGeneralComplaints(id);
            return Ok(GeneralComplaintsies);
        }
        [HttpPost("upload")]
        [AllowAnonymous]
        public async Task<ActionResult> UploadExcelFile(IFormFile file)
        {


            var data = _generalComplaintService.CreateFromExcel(file);



            return Ok(data);
        }

    }


}

