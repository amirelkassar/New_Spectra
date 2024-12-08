using Microsoft.AspNetCore.Mvc;

namespace Spectra.WebAPI.Areas.MedicalProvider
{
    [Area("employee")]
    [ApiController]
    [Route("api/[area]/[controller]")]
    public abstract class EmployeeControllerBase : ControllerBase
    {
    }
}

