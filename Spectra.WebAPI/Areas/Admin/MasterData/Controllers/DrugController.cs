using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.Drug.Commands;
using Spectra.Application.MasterData.Drug.Services;
using Spectra.Domain.Shared.Constants.Permissions.Admin;
using Spectra.Domain.Shared.Constants.Permissions.Admin.MasterDataPermissons;

namespace Spectra.WebAPI.Areas.Admin.MasterData.Controllers
{

    [Authorize]

    public class DrugController : MasterDataController
    {
        private readonly IDrugService _drugtService;

        public DrugController(IDrugService drugtService)
        {
            _drugtService = drugtService;
        }

        [HttpGet]
        [Authorize(AdminDrugPermissions.ReadList)]
        public async Task<ActionResult> GetAllDrug()
        {
            var Drugies = await _drugtService.GetAllDrugs();
            return Ok(Drugies);
        }

        [HttpGet("DrugsNames")]
        [Authorize(AdminDrugPermissions.ReadList)]
        public async Task<ActionResult> GetAllDrugNames()
        {
            var Drugies = await _drugtService.GetAllDrugsNames();

            return Ok(Drugies);
        }


        [HttpGet("id")]
        [Authorize(AdminDrugPermissions.ReadOne)]
        public async Task<ActionResult> GetOneDrug(string id)
        {
            var Drugies = await _drugtService.GetDrugById(id);
            return Ok(Drugies);
        }
        [HttpPost]
        [Authorize(AdminDrugPermissions.Create)]
        public async Task<ActionResult> CreateDrugs([FromForm] CreateDrugCommand input)
        {

            var Drugies = await _drugtService.CreateDrug(input);
            return Ok(Drugies);
        }
        [HttpPut("id")]
        [Authorize(AdminDrugPermissions.Update)]
        public async Task<ActionResult> UpdateDrug(string id, [FromForm] UpdateDrugCommand input)
        {
            var Drugies = await _drugtService.UpdateDrug(id, input);
            return Ok(Drugies);
        }
        [HttpDelete("id")]
        [Authorize(AdminDrugPermissions.Delete)]
        public async Task<ActionResult> DeleteDrug(string id)
        {
            var Drugies = await _drugtService.DeleteDrug(id);
            return Ok(Drugies);
        }
        [HttpPost("upload")]
        [Authorize(AdminDrugPermissions.SheetsPermissions)]
        public async Task<ActionResult> UploadExcelFile(IFormFile file)
        {


            var data = _drugtService.CreateFromExcel(file);



            return Ok(data);
        }

    }

}

