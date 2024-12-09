using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Spectra.WebAPI.Areas.MedicalProvider
{
    [Area("employee")]
    [ApiController]
    [Route("api/[area]/[controller]")]
    [Authorize]
    public abstract class EmployeeControllerBase : ControllerBase
    {
    }
}

