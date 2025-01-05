using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Interfaces;
using Spectra.Application.Templates.Service;
using Spectra.Application.Templates.Models;

namespace Spectra.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly ISnomedService _snomedService;
        private readonly ITemplateService _templateService;

        public HomeController(ISnomedService snomedService, ITemplateService templateService)
        {
            _snomedService = snomedService;
            _templateService = templateService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            return Ok(await _snomedService.GetAll("speech"));
        }
        [HttpGet("template")]
        public async Task<IActionResult> GetContractTemplate()
        {

            var model = new EmployeeContractTemplateModel()
            {
                CompanyName = "شركة المستقبل للرعاية الصحية"
            };
            var pdf = await _templateService.GetContractTemplateAsync(model);
            return File(pdf, "Application/Pdf", "test.pdf");
        }
    }
}
