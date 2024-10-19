using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.DiagnoseCommend.Commands;
using Spectra.Application.MasterData.DiagnoseCommend.Services;


namespace Spectra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DiagnoseController : ControllerBase
    {
        private readonly IDiagnosesService _diagnosetService;



        public DiagnoseController(IDiagnosesService diagnosetService)
        {
            _diagnosetService = diagnosetService;

        }


        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllDiagnose()
        {
            var Diagnoseies = await _diagnosetService.GetAllDiagnosess();

            return Ok(Diagnoseies);
        }



        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneDiagnose(string id)
        {
            var Diagnoseies = await _diagnosetService.GetDiagnosesById(id);
            return Ok(Diagnoseies);
        }
        [HttpGet("GetAllNames")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllSpecializationsNames()
        {
            var Diagnoseies = await _diagnosetService.GetAllDiagnosesNames();

            return Ok(Diagnoseies);
        }

        [HttpPost]
        [AllowAnonymous]

        public async Task<ActionResult> CreateDiagnose([FromQuery] CreateDiagnoseCommand input)
        {

            var Diagnoseies = await _diagnosetService.CreateDiagnoses(input);

            return Ok(Diagnoseies);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateDiagnose(string id, UpdateDiagnoseCommand input)
        {
            var Diagnoseies = await _diagnosetService.UpdateDiagnoses(id, input);

            return Ok(Diagnoseies);
        }
        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteDiagnose(string id)
        {
            var delete = await _diagnosetService.DeleteDiagnoses(id);
            return Ok(delete);
        }
        [HttpPost("upload")]
        [AllowAnonymous]
        public async Task<ActionResult> UploadExcelFile(IFormFile file)
        {

            var data = _diagnosetService.CreateFromExcel(file);



            return Ok(data);
        }


    }

}


