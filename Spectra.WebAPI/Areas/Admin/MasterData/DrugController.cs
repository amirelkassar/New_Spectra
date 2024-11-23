using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.Drug.Commands;
using Spectra.Application.MasterData.Drug.Queries;
using Spectra.Application.MasterData.Drug.Services;
using Spectra.Domain.Shared.Constants.Permissions.Admin.MasterDataPermissons;

namespace Spectra.WebAPI.Areas.Admin.MasterData
{

    public class DrugController : AdminBaseController
    {
        private readonly IDrugService _drugtService;

        public DrugController(IDrugService drugtService)
        {
            _drugtService = drugtService;
        }

        [HttpGet("list")]
        [Authorize(AdminDrugPermissions.ReadList)]
        public async Task<ActionResult> GetListAsync([FromQuery] GetAllDrugQuery input)
        {
            var response = await _drugtService.GetAllDrugs(input);
            return Ok(response);
        }

        [HttpGet("name-list")]
        [Authorize(AdminDrugPermissions.ReadList)]
        public async Task<ActionResult> GetNameListAsync([FromQuery] GetAllDrugNamesQuery input)
        {
            var response = await _drugtService.GetAllDrugNames(input);
            return Ok(response);
        }


        [HttpGet]
        [Authorize(AdminDrugPermissions.ReadOne)]
        public async Task<ActionResult> GetAsync([FromQuery] string id)
        {
            var response = await _drugtService.GetDrugById(id);
            return Ok(response);
        }
        [HttpPost]
        [Authorize(AdminDrugPermissions.Create)]
        public async Task<ActionResult> CreateAsync([FromForm] CreateDrugCommand input)
        {
            var response = await _drugtService.CreateDrug(input);
            return Created("", response);
        }
        [HttpPut]
        [Authorize(AdminDrugPermissions.Update)]
        public async Task<ActionResult> UpdateAsync([FromForm] UpdateDrugCommand input)
        {
            var response = await _drugtService.UpdateDrug(input);
            return Accepted(response);
        }
        [HttpDelete]
        [Authorize(AdminDrugPermissions.Delete)]
        public async Task<ActionResult> DeleteAsync(string id)
        {
            var response = await _drugtService.DeleteDrug(id);
            return NoContent();
        }
        [HttpPost("bulk")]
        [Authorize(AdminDrugPermissions.SheetsPermissions)]
        public async Task<ActionResult> UploadExcelFile(IFormFile file)
        {
            var data = _drugtService.CreateFromExcel(file);
            return Created("", data);
        }

    }

}

