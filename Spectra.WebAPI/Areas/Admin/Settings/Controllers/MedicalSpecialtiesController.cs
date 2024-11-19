using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Settings.MedicalSpecialties.Commands;
using Spectra.Application.Settings.MedicalSpecialties.Services;
using Spectra.Domain.Shared.Constants.Permissions.AdminSettings;

namespace Spectra.WebAPI.Areas.Admin.Settings.Controllers
{
    [Authorize]
    public class MedicalSpecialtiesController : SettingsController
    {
        private readonly IMedicalSpecialtiesService _entityServices;

        public MedicalSpecialtiesController(IMedicalSpecialtiesService MedicalSpecialtsServices)
        {
            _entityServices = MedicalSpecialtsServices;
        }
        [HttpGet]
        [Authorize(AdminMedicalSpecialtiesPermissions.ReadList)]
        public async Task<ActionResult> GetAllMedicalSpecialt()
        {
            var MedicalSpecialts = await _entityServices.GetAllMedicalSpecialties();
            return Ok(MedicalSpecialts);
        }

        [HttpGet("id")]
        [Authorize(AdminMedicalSpecialtiesPermissions.ReadOne)]
        public async Task<ActionResult> GetOneMedicalSpecialt(string id)
        {
            var MedicalSpecialt = await _entityServices.GetMedicalSpecialtiesMById(id);
            return Ok(MedicalSpecialt);
        }

        [HttpPost]
        [Authorize(AdminMedicalSpecialtiesPermissions.Create)]
        public async Task<ActionResult> CreateMedicalSpecialt(CreateMedicalSpecialtCommand input)
        {
            var MedicalSpecialt = await _entityServices.CreateMedicalSpecialties(input);
            return Ok(MedicalSpecialt);
        }

        [HttpPut("id")]
        [Authorize(AdminMedicalSpecialtiesPermissions.Update)]
        public async Task<ActionResult> UpdateMedicalSpecialt(string id, UpdateMedicalSpecialtCommand input)
        {
            var MedicalSpecialt = await _entityServices.UpdateMedicalSpecialties(id, input);

            return Ok(MedicalSpecialt);
        }

        [HttpDelete("id")]
        [Authorize(AdminMedicalSpecialtiesPermissions.Delete)]
        public async Task<ActionResult> DeleteMedicalSpecialt(string id)
        {
            var MedicalSpecialt = await _entityServices.DeleteMedicalSpecialties(id);
            return Ok(MedicalSpecialt);
        }


    }

}
