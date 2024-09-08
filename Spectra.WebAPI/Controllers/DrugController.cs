using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Clients.Services;
using Spectra.Application.MasterData.Drug.Commands;
using Spectra.Application.MasterData.Drug.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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


            await _drugtService.UpdateDrug(id, input);
            return NoContent();
        }
        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteDrug(string id)
        {
            await _drugtService.DeleteDrug(id);
            return NoContent();
        }

    }

}

