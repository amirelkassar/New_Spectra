using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.DiagnoseCommend.Commands;
using Spectra.Application.MasterData.DiagnoseCommend.Services;
using Spectra.Domain.Shared.Constants.Permissions.Admin.MasterDataPermissons;

namespace Spectra.WebAPI.Areas.Admin.MasterData.Controllers
{
    [Authorize]
    public class DiagnoseController : MasterDataController
    {
        private readonly IDiagnosesService _diagnosetService;

        public DiagnoseController(IDiagnosesService diagnosetService)
        {
            _diagnosetService = diagnosetService;

        }


        [HttpGet]
        [Authorize(AdminDiagnosePermissions.ReadList)]
        public async Task<ActionResult> GetAllDiagnose()
        {
            var Diagnoseies = await _diagnosetService.GetAllDiagnosess();

            return Ok(Diagnoseies);
        }



        [HttpGet("id")]
        [Authorize(AdminDiagnosePermissions.ReadOne)]
        public async Task<ActionResult> GetOneDiagnose(string id)
        {
            var Diagnoseies = await _diagnosetService.GetDiagnosesById(id);
            return Ok(Diagnoseies);
        }
        [HttpGet("GetAllNames")]
        [Authorize(AdminDiagnosePermissions.ReadList)]
        public async Task<ActionResult> GetAllSpecializationsNames()
        {
            var Diagnoseies = await _diagnosetService.GetAllDiagnosesNames();

            return Ok(Diagnoseies);
        }

        [HttpPost]
        [Authorize(AdminDiagnosePermissions.Create)]

        public async Task<ActionResult> CreateDiagnose(CreateDiagnoseCommand input)
        {

            var Diagnoseies = await _diagnosetService.CreateDiagnoses(input);

            return Ok(Diagnoseies);
        }
        [HttpPut("id")]
        [Authorize(AdminDiagnosePermissions.Update)]
        public async Task<ActionResult> UpdateDiagnose(string id, UpdateDiagnoseCommand input)
        {
            var Diagnoseies = await _diagnosetService.UpdateDiagnoses(id, input);

            return Ok(Diagnoseies);
        }
        [HttpDelete("id")]
        [Authorize(AdminDiagnosePermissions.Delete)]
        public async Task<ActionResult> DeleteDiagnose(string id)
        {
            var delete = await _diagnosetService.DeleteDiagnoses(id);
            return Ok(delete);
        }
        [HttpPost("upload")]
        [Authorize(AdminDiagnosePermissions.SheetsPermissions)]
        public async Task<ActionResult> UploadExcelFile(IFormFile file)
        {

            var data = _diagnosetService.CreateFromExcel(file);



            return Ok(data);
        }


    }

}


