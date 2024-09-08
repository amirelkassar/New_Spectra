using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Application.MasterData.DiagnoseCommend.Commands;
using Spectra.Application.MasterData.DiagnoseCommend.Services;
using Microsoft.AspNetCore.Http;
using Spectra.Infrastructure.MasterData.ExcelFile;
using static Spectra.Application.MasterData.UploadExcel.Command.CreateDiagnoseFormExcelCommand;
using Spectra.Application.MasterData.UploadExcel.Services;


namespace Spectra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DiagnoseController : ControllerBase
    {
        private readonly IDiagnosesService _diagnosetService;
        private readonly IExcelProcessingService _excelProcessingService;

        public DiagnoseController(IDiagnosesService diagnosetService, IExcelProcessingService excelProcessingService)
        {
            _diagnosetService = diagnosetService;
            _excelProcessingService = excelProcessingService;
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
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreateDiagnose(CreateDiagnoseCommand input)
        {
            var Diagnoseies = await _diagnosetService.CreateDiagnoses(input);
            return Ok(Diagnoseies);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateDiagnose(string id, UpdateDiagnoseCommand input)
        {
            await _diagnosetService.UpdateDiagnoses(id, input);
            return NoContent();
        }
        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteDiagnose(string id)
        {
            await _diagnosetService.DeleteDiagnoses(id);
            return NoContent();
        }
        [HttpPost("upload")]
        [AllowAnonymous]
        public async Task<ActionResult> UploadExcelFile(IFormFile file)
        {
          

            var data = _diagnosetService.CreateFromExcel(file);

          

            return Ok("Data successfully uploaded and processed.");
        }

    }

}


