using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Settings.MedicalSpecialties.Commands;
using Spectra.Application.Settings.MedicalSpecialties.Services;

namespace Spectra.WebAPI.Areas.Admin.Settings.Controllers
{
    public class MedicalSpecialtiesController : SettingsController
    {
        private readonly IMedicalSpecialtiesService _entityServices;

        public MedicalSpecialtiesController(IMedicalSpecialtiesService MedicalSpecialtsServices)
        {
            _entityServices = MedicalSpecialtsServices;
        }
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllMedicalSpecialt()
        {
            var MedicalSpecialts = await _entityServices.GetAllMedicalSpecialties();
            return Ok(MedicalSpecialts);
        }
       
        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneMedicalSpecialt(string id)
        {
            var MedicalSpecialt = await _entityServices.GetMedicalSpecialtiesMById(id);
            return Ok(MedicalSpecialt);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreateMedicalSpecialt(CreateMedicalSpecialtCommand input)
        {
            var MedicalSpecialt = await _entityServices.CreateMedicalSpecialties(input);
            return Ok(MedicalSpecialt);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateMedicalSpecialt(string id, UpdateMedicalSpecialtCommand input)
        {
            var MedicalSpecialt = await _entityServices.UpdateMedicalSpecialties(id, input);

            return Ok(MedicalSpecialt);
        }
        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteMedicalSpecialt(string id)
        {
            var MedicalSpecialt = await _entityServices.DeleteMedicalSpecialties(id);
            return Ok(MedicalSpecialt);
        }
       
        
    }

}
