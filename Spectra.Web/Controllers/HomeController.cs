using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Constants;

namespace Spectra.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController(ICurrentUser currentUser) : ControllerBase
    {
        private readonly ICurrentUser currentUser = currentUser;

        [HttpGet]
        [Authorize(Roles = Roles.SystemAdmin)]
        public async Task<IActionResult> GetAsync()
        {
            return Ok(currentUser);
        }
    }
}
