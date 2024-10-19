using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MedicalStaff.Specialists.Dto;
using Spectra.Application.MedicalStaff.Specialists.Services;

namespace Spectra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SpecialistController : ControllerBase
    {
        private readonly ISpecialistService _SpecialistService;



        public SpecialistController(ISpecialistService SpecialistService)
        {

            _SpecialistService = SpecialistService;


        }


        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllSpecialists()
        {
            var Specialisties = await _SpecialistService.GetAllSpecialists();
            return Ok(Specialisties);
        }



        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneSpecialist(string id)
        {
            var Specialisties = await _SpecialistService.GetSpecialistById(id);
            return Ok(Specialisties);
        }
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreateNormalSpecialist([FromForm] CreateSpecialistDto input)
        {


            var Specialisties = await _SpecialistService.CreateSpecialist(input);
            return Ok(Specialisties);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateSpecialist(string id, [FromForm] UpdateSpecialistDto input)
        {


            var Specialist = await _SpecialistService.UpdateSpecialist(id, input);

            return Ok(Specialist);
        }
        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteSpecialist(string id)
        {
            var Specialist = await _SpecialistService.DeleteSpecialist(id);
            return Ok(Specialist);
        }


    }

}

