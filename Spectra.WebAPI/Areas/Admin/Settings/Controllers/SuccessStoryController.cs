using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Settings.SuccessStorIes.Commands;
using Spectra.Domain.Shared.Constants.Permissions.AdminSettings;
using Spectra.Infrastructure.Settings.SuccessStorIes;

namespace Spectra.WebAPI.Areas.Admin.Settings.Controllers
{
    [Authorize]
    public class SuccessStoryController : SettingsController
    {
        private readonly ISuccessStoryService _entityServices;

        public SuccessStoryController(ISuccessStoryService SuccessStorysServices)
        {
            _entityServices = SuccessStorysServices;
        }

        [HttpGet]
        [Authorize(AdminSuccessStoryPermissions.ReadList)]
        public async Task<ActionResult> GetAllSuccessStory()
        {
            var successStorys = await _entityServices.GetAllSuccessStoryies();
            return Ok(successStorys);
        }

        [HttpGet("id")]
        [Authorize(AdminSuccessStoryPermissions.ReadOne)]
        public async Task<ActionResult> GetOneSuccessStory(string id)
        {
            var successStorys = await _entityServices.GetSuccessStoryiesMById(id);
            return Ok(successStorys);
        }
        [HttpPost]
        [Authorize(AdminSuccessStoryPermissions.Create)]
        public async Task<ActionResult> CreateSuccessStory(CreateSuccessStoryCommand input)
        {
            var successStorys = await _entityServices.CreateSuccessStoryies(input);
            return Ok(successStorys);
        }
        [HttpPut("id")]
        [Authorize(AdminSuccessStoryPermissions.Update)]
        public async Task<ActionResult> UpdateSuccessStory(string id, UpdateSuccessStoryCommand input)
        {
            var successStorys = await _entityServices.UpdateSuccessStoryies(id, input);

            return Ok(successStorys);
        }
        [HttpDelete("id")]
        [Authorize(AdminSuccessStoryPermissions.Delete)]
        public async Task<ActionResult> DeleteSuccessStory(string id)
        {
            var successStorys = await _entityServices.DeleteSuccessStoryies(id);
            return Ok(successStorys);
        }


    }

}
