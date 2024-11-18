using Microsoft.AspNetCore.Mvc;

namespace Spectra.WebAPI.Areas.Admin
{
    [ApiController]
    [Route("api/[area]/[controller]")]
    //[Authorize(Roles = $"{Roles.SystemAdmin}")]
    public abstract class BassAdminController : ControllerBase
    {

    }
}
