using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.Sections.Commands;
using Spectra.Application.MasterData.Sections.Queries;
using Spectra.Application.MasterData.Sections.Service;
using Spectra.Domain.Shared.Constants.Permissions.Admin.MasterDataPermissons;

namespace Spectra.WebAPI.Areas.Admin.MasterData
{
    public class SectionController(ISectionsService sectionsServices) : AdminBaseController
    {
        private readonly ISectionsService _sectionsServices = sectionsServices;

        [HttpGet("list")]
        public async Task<ActionResult> GetAllSection([FromQuery] GetAllSectionsQuery input)
        {
            var sections = await _sectionsServices.GetAllSection(input);
            return Ok(sections);
        }

        [HttpGet()]
        public async Task<ActionResult> GetOneSection([FromQuery] GetSectionByIdQuery input)
        {
            var section = await _sectionsServices.GetSectionById(input.Id);
            return Ok(section);
        }

        [HttpPost]
        public async Task<ActionResult> CreateSection([FromBody] CreateSectionsCommand input)
        {
            var section = await _sectionsServices.CreateSection(input);
            return Created("", section);
        }

        [HttpPut()]
        public async Task<ActionResult> UpdateSection([FromBody] UpdateSectionsCommand input)
        {
            var section = await _sectionsServices.UpdateSection(input);
            return Accepted("", section);
        }

        [HttpDelete()]
        public async Task<ActionResult> DeleteSection([FromQuery] DeleteSectionsCommand input)
        {
            var section = await _sectionsServices.DeleteSection(input);
            return NoContent();
        }
    }

}
