using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Settings.SuccessStorIes.Commands;
using Spectra.Infrastructure.Settings.SuccessStorIes;

namespace Spectra.WebAPI.Areas.Admin.Settings.Controllers
{
    public class SuccessStoryController : SettingsController
    {
        private readonly ISuccessStoryService _entityServices;

        public SuccessStoryController(ISuccessStoryService SuccessStorysServices)
        {
            _entityServices = SuccessStorysServices;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllSuccessStory()
        {
            var successStorys = await _entityServices.GetAllSuccessStoryies();
            return Ok(successStorys);
        }
       
        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneSuccessStory(string id)
        {
            var successStorys = await _entityServices.GetSuccessStoryiesMById(id);
            return Ok(successStorys);
        }
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreateSuccessStory(CreateSuccessStoryCommand input)
        {
            var successStorys = await _entityServices.CreateSuccessStoryies(input);
            return Ok(successStorys);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateSuccessStory(string id, UpdateSuccessStoryCommand input)
        {
            var successStorys = await _entityServices.UpdateSuccessStoryies(id, input);

            return Ok(successStorys);
        }
        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteSuccessStory(string id)
        {
            var successStorys = await _entityServices.DeleteSuccessStoryies(id);
            return Ok(successStorys);
        }
       
        
    }

}
