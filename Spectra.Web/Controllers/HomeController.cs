using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Domain.Shared.Constants;

namespace Spectra.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        [Authorize(Roles = Roles.SystemAdmin)]
        public async Task<IActionResult> GetAsync()
        {
            var user = HttpContext.User;
            return Ok(user.Identity);
        }
    }
}
