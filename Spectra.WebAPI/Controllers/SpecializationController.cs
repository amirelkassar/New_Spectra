using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.SpecializationCommend.Commands;
using Spectra.Application.MasterData.SpecializationCommend.Services;

namespace Spectra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SpecializationController : ControllerBase
    {

        private readonly ISpecializationService _specializationsServices;

        public SpecializationController(ISpecializationService specializationsServices)
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
        [HttpGet("GetAllNames")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllSpecializationsNames()
        {
            var Specializationsies = await _specializationsServices.GetAllSpecializationsNames( );
          
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
        [HttpPost("upload")]
        [AllowAnonymous]
        public async Task<ActionResult> UploadExcelFile(IFormFile file)
        {


            var data = _specializationsServices.CreateFromExcel(file);



            return Ok(data);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateSpecializations(string id, UpdateSpecializationCommand input)
        {


            var Specializationsies = await _specializationsServices.UpdateSpecialization(id, input);
            return Ok(Specializationsies);
        }
        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteSpecializations(string id)
        {
            var Specializationsies = await _specializationsServices.DeleteSpecialization(id);
            return Ok(Specializationsies);
        }

    }

}

