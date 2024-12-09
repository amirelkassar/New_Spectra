using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.DiagnoseCommend.Commands;
using Spectra.Application.MasterData.DiagnoseCommend.Queries;
using Spectra.Application.MasterData.DiagnoseCommend.Services;
using Spectra.Domain.Shared.Constants.Permissions.Admin.MasterDataPermissons;

namespace Spectra.WebAPI.Areas.Admin.MasterData
{
    public class DiagnoseController(IDiagnosesService diagnosetService) : AdminBaseController
    {
        private readonly IDiagnosesService _diagnosetService = diagnosetService;

        [HttpGet("list")]
        public async Task<ActionResult> GetAllDiagnose([FromQuery] GetAllDiagnoseQuery input)
        {
            var Diagnoseies = await _diagnosetService.GetAllDiagnosess(input);
            return Ok(Diagnoseies);
        }



        [HttpGet()]
        public async Task<ActionResult> GetOneDiagnose([FromQuery] GetDiagnoseByIdQuery input)
        {
            var Diagnoseies = await _diagnosetService.GetDiagnosesById(input.Id);
            return Ok(Diagnoseies);
        }

        [HttpPost]
        public async Task<ActionResult> CreateDiagnose([FromBody] CreateDiagnoseCommand input)
        {
            var Diagnoseies = await _diagnosetService.CreateDiagnoses(input);
            return Created("", Diagnoseies);
        }
        [HttpPut()]
        public async Task<ActionResult> UpdateDiagnose([FromBody] UpdateDiagnoseCommand input)
        {
            var Diagnoseies = await _diagnosetService.UpdateDiagnoses(input);

            return Accepted(Diagnoseies);
        }
        [HttpDelete()]
        public async Task<ActionResult> DeleteDiagnose([FromQuery] DeleteDiagnoseCommand input)
        {
            var delete = await _diagnosetService.DeleteDiagnoses(input);
            return NoContent();
        }
        [HttpPost("bulk")]
        public async Task<ActionResult> UploadExcelFile([FromForm] BulkCreateModel input)
        {
            var data = _diagnosetService.CreateFromExcel(input.File);
            return Created("", data);
        }


    }

}


