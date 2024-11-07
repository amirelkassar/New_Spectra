using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Admin.Queries;
using Spectra.Application.MasterData.Sections.Commands;
using Spectra.Application.MasterData.Sections.Queries;
using Spectra.Application.MasterData.Sections.Service;

namespace Spectra.WebAPI.Areas.Admin.Controllers
{
    public class SectionController : BassAdminController
    {
        private readonly ISectionsServices _sectionsServices;

        public SectionController(ISectionsServices sectionsServices)
        {
            _sectionsServices = sectionsServices;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllsection()
        {
            var sections = await _sectionsServices.GetAllSection();
            return Ok(sections);
        }
        [HttpGet("GetAllNames")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAlllsectionNames()
        {

            var sectionNames = await _sectionsServices.GetAllSectionNames();

            return Ok(sectionNames);
        }


        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOnesection(string id)
        {
            var section = await _sectionsServices.GetSectionById(id);
            return Ok(section);
        }
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> Createsection(CreateSectionsCommand input)
        {
            var section = await _sectionsServices.CreateSection(input);
            return Ok(section);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> Updatesection(string id, UpdateSectionsCommand input)
        {
            var section = await _sectionsServices.UpdateSection(id, input);

            return Ok(section);
        }

        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> Deletesection(string id)
        {
            var section = await _sectionsServices.DeleteSection(id);
            return Ok(section);
        }
        [HttpGet("GetAllDoctors")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllDoctors( )
        {
            var appointmenties = await _sectionsServices.GetAllDoctors();
            return Ok(appointmenties);
        }
        //[HttpPost("upload")]
        //[AllowAnonymous]
        //public async Task<ActionResult> UploadExcelFile(IFormFile file)
        //{

        //    var data = _sectionsServices.CreateFromExcel(file);
        //    return Ok(data);

        //}
    }
   
}
