using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedicalTestsAndXrayController : ControllerBase
    {
        private readonly IMedicalTestsAndXrayService _medicalTestsAndXrayService;

        public MedicalTestsAndXrayController(IMedicalTestsAndXrayService medicalTestsAndXrayService)
        {
            _medicalTestsAndXrayService = medicalTestsAndXrayService;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllMedicalTestsAndXray()
        {
            var MedicalTestsAndXrayies = await _medicalTestsAndXrayService.GetAllMedicalTestsAndXray();
            return Ok(MedicalTestsAndXrayies);
        }



        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneMedicalTestsAndXray(string id)
        {
            var MedicalTestsAndXrayies = await _medicalTestsAndXrayService.GetMedicalTestsAndXrayById(id);
            return Ok(MedicalTestsAndXrayies);
        }
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreateMedicalTestsAndXray(CreateMedicalTestsAndXraysCommand input)
        {
            var MedicalTestsAndXrayies = await _medicalTestsAndXrayService.CreateMedicalTestsAndXray(input);
            return Ok(MedicalTestsAndXrayies);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateMedicalTestsAndXray(string id, UpdateMedicalTestsAndXraysCommand input)
        {
            await _medicalTestsAndXrayService.UpdateMedicalTestsAndXray(id, input);
            return NoContent();
        }
        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteMedicalTestsAndXray(string id)
        {
            await _medicalTestsAndXrayService.DeleteMedicalTestsAndXray(id);
            return NoContent();
        }
    }
}
