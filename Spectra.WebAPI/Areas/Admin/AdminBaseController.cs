using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Domain.Shared.Constants;

namespace Spectra.WebAPI.Areas.Admin
{
    [Area("admin")]
    [ApiController]
    [Route("api/[area]/[controller]")]
    [Authorize(Roles = Roles.SystemAdmin)]
    public abstract class AdminBaseController : ControllerBase
    {

    }
}
