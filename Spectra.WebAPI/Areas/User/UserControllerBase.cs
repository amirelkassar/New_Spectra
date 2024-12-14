using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.Interfaces;

namespace Spectra.WebAPI.Areas.User
{
    [Area("user")]
    [ApiController]
    [Route("api/[area]/[controller]")]
    [Authorize]
    public abstract class UserControllerBase<TController>(ILogger<TController> logger, ICurrentUser currentUser) : SpectraControllerBase<TController>(logger, currentUser) where TController : UserControllerBase<TController>
    {
    }
}
