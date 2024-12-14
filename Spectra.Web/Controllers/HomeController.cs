using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Interfaces;

namespace Spectra.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController(ISnomedService snomedService) : ControllerBase
    {
        private readonly ISnomedService _snomedService = snomedService;

        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            return Ok(await _snomedService.GetAll("speech"));
        }
    }
}
