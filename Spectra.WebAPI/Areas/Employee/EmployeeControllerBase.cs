using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.Interfaces;

namespace Spectra.WebAPI.Areas.MedicalProvider
{
    [Area("employee")]
    [ApiController]
    [Route("api/[area]/[controller]")]
    [Authorize]
    public abstract class EmployeeControllerBase<TEmployeeController>(ILogger<TEmployeeController> logger, ICurrentUser currentUser) :
        SpectraControllerBase<TEmployeeController>(logger, currentUser) where TEmployeeController : EmployeeControllerBase<TEmployeeController>
    {
    }
}

