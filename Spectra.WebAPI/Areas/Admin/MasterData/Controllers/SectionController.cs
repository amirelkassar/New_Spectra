using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.Sections.Commands;
using Spectra.Application.MasterData.Sections.Service;
using Spectra.Domain.Shared.Constants.Permissions.MasterDataPermissons;

namespace Spectra.WebAPI.Areas.Admin.MasterData.Controllers
{
    [Authorize]
    public class SectionController : MasterDataController
    {
        private readonly ISectionsServices _sectionsServices;

        public SectionController(ISectionsServices sectionsServices)
        {
            _sectionsServices = sectionsServices;
        }

        [HttpGet]
        [Authorize(AdminSectionsPermissions.ReadList)]
        public async Task<ActionResult> GetAllSection()
        {
            var sections = await _sectionsServices.GetAllSection();
            return Ok(sections);
        }

        [HttpGet("GetAllNames")]
        [Authorize(AdminSectionsPermissions.ReadList)]
        public async Task<ActionResult> GetAllSectionNames()
        {
            var sectionNames = await _sectionsServices.GetAllSectionNames();
            return Ok(sectionNames);
        }

        [HttpGet("id")]
        [Authorize(AdminSectionsPermissions.ReadOne)]
        public async Task<ActionResult> GetOneSection(string id)
        {
            var section = await _sectionsServices.GetSectionById(id);
            return Ok(section);
        }

        [HttpPost]
        [Authorize(AdminSectionsPermissions.Create)]
        public async Task<ActionResult> CreateSection(CreateSectionsCommand input)
        {
            var section = await _sectionsServices.CreateSection(input);
            return Ok(section);
        }

        [HttpPut("id")]
        [Authorize(AdminSectionsPermissions.Update)]
        public async Task<ActionResult> UpdateSection(string id, UpdateSectionsCommand input)
        {
            var section = await _sectionsServices.UpdateSection(id, input);
            return Ok(section);
        }

        [HttpDelete("id")]
        [Authorize(AdminSectionsPermissions.Delete)]
        public async Task<ActionResult> DeleteSection(string id)
        {
            var section = await _sectionsServices.DeleteSection(id);
            return Ok(section);
        }

        [HttpGet("GetAllDoctors")]
        [Authorize(AdminSectionsPermissions.ReadList)]
        public async Task<ActionResult> GetAllDoctors()
        {
            var doctors = await _sectionsServices.GetAllDoctors();
            return Ok(doctors);
        }
    }

}
