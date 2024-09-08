using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Application.MasterData.SpecializationCommend.Commands;
using Spectra.Application.MasterData.SpecializationCommend.Services;

namespace Spectra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SpecializationsController : ControllerBase
    {

        private readonly ISpecializationService _specializationsServices;

        public SpecializationsController(ISpecializationService specializationsServices)
        {
            _specializationsServices = specializationsServices;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllSpecializations()
        {
            var Specializationsies = await _specializationsServices.GetAllSpecializations();
            return Ok(Specializationsies);
        }



        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneSpecializations(string id)
        {
            var Specializationsies = await _specializationsServices.GetSpecializationById(id);
            return Ok(Specializationsies);
        }
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreateSpecializations(CreateSpecializationCommand input)
        {


            var Specializationsies = await _specializationsServices.CreateSpecialization(input);
            return Ok(Specializationsies);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateSpecializations(string id, UpdateSpecializationCommand input)
        {


            await _specializationsServices.UpdateSpecialization(id, input);
            return NoContent();
        }
        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteSpecializations(string id)
        {
            await _specializationsServices.DeleteSpecialization(id);
            return NoContent();
        }

    }

}

