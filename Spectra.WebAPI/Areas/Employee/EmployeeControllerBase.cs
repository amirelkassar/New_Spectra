using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Domain.Shared.Constants;

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

