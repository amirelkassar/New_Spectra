using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Settings.SuccessStorIes.Commands;
using Spectra.Domain.Shared.Constants.Permissions.Admin.AdminSettings;
using Spectra.Infrastructure.Settings.SuccessStorIes;

namespace Spectra.WebAPI.Areas.Admin.Settings
{
    public class SuccessStoryController : AdminBaseController
    {
        private readonly ISuccessStoryService _entityServices;

        public SuccessStoryController(ISuccessStoryService SuccessStorysServices)
        {
            _entityServices = SuccessStorysServices;
        }

        [HttpGet]
        public async Task<ActionResult> GetAllSuccessStory()
        {
            var successStorys = await _entityServices.GetAllSuccessStoryies();
            return Ok(successStorys);
        }

        [HttpGet("id")]
        public async Task<ActionResult> GetOneSuccessStory(string id)
        {
            var successStorys = await _entityServices.GetSuccessStoryiesMById(id);
            return Ok(successStorys);
        }
        [HttpPost]
        public async Task<ActionResult> CreateSuccessStory(CreateSuccessStoryCommand input)
        {
            var successStorys = await _entityServices.CreateSuccessStoryies(input);
            return Ok(successStorys);
        }
        [HttpPut("id")]
        public async Task<ActionResult> UpdateSuccessStory(string id, UpdateSuccessStoryCommand input)
        {
            var successStorys = await _entityServices.UpdateSuccessStoryies(id, input);

            return Ok(successStorys);
        }
        [HttpDelete("id")]
        public async Task<ActionResult> DeleteSuccessStory(string id)
        {
            var successStorys = await _entityServices.DeleteSuccessStoryies(id);
            return Ok(successStorys);
        }


    }

}
