using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Spectra.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        [Authorize(Roles ="SuperAdmin")]
        public async Task<IActionResult> GetAsync()
        {
            var user=HttpContext.User;
            return Ok(user.Identity);
        }
    }
}
