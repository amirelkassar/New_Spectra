using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.Drug.Commands;
using Spectra.Application.MasterData.Drug.Services;

namespace Spectra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DrugController : ControllerBase
    {
        private readonly IDrugService _drugtService;

        public DrugController(IDrugService drugtService)
        {
            _drugtService = drugtService;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllDrug()
        {
            var Drugies = await _drugtService.GetAllDrugs();
            return Ok(Drugies);
        }

        [HttpGet("DrugsNames")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllDrugNames()
        {
            var Drugies = await _drugtService.GetAllDrugsNames();

            return Ok(Drugies);
        }


        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneDrug(string id)
        {
            var Drugies = await _drugtService.GetDrugById(id);
            return Ok(Drugies);
        }
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreateDrugs([FromForm] CreateDrugCommand input)
        {

            var Drugies = await _drugtService.CreateDrug(input);
            return Ok(Drugies);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateDrug(string id, [FromForm] UpdateDrugCommand input)
        {


            var Drugies = await _drugtService.UpdateDrug(id, input);
            return Ok(Drugies);
        }
        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteDrug(string id)
        {
            var Drugies = await _drugtService.DeleteDrug(id);
            return Ok(Drugies);
        }
        [HttpPost("upload")]
        [AllowAnonymous]
        public async Task<ActionResult> UploadExcelFile(IFormFile file)
        {


            var data = _drugtService.CreateFromExcel(file);



            return Ok(data);
        }

    }

}

