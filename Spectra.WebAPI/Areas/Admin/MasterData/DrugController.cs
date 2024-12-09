using Microsoft.AspNetCore.Authorization;
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
        public async Task<ActionResult> GetListAsync([FromQuery] GetAllDrugQuery input)
        {
            var response = await _drugtService.GetAllDrugs(input);
            return Ok(response);
        }

        [HttpGet("name-list")]
        public async Task<ActionResult> GetNameListAsync([FromQuery] GetAllDrugNamesQuery input)
        {
            var response = await _drugtService.GetAllDrugNames(input);
            return Ok(response);
        }


        [HttpGet]
        public async Task<ActionResult> GetAsync([FromQuery] string id)
        {
            var response = await _drugtService.GetDrugById(id);
            return Ok(response);
        }
        [HttpPost]
        public async Task<ActionResult> CreateAsync([FromForm] CreateDrugCommand input)
        {
            var response = await _drugtService.CreateDrug(input);
            return Created("", response);
        }
        [HttpPut]
        public async Task<ActionResult> UpdateAsync([FromForm] UpdateDrugCommand input)
        {
            var response = await _drugtService.UpdateDrug(input);
            return Accepted(response);
        }
        [HttpDelete]
        public async Task<ActionResult> DeleteAsync([FromQuery] DeleteDrugCommand input)
        {
            var response = await _drugtService.DeleteDrug(input.Id);
            return NoContent();
        }
        [HttpPost("bulk")]
        public async Task<ActionResult> UploadExcelFile([FromForm] BulkCreateModel input)
        {
            var data = _drugtService.CreateFromExcel(input.File);
            return Created("", data);
        }

    }

}

