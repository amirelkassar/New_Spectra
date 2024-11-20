using Microsoft.AspNetCore.Mvc;

namespace Spectra.WebAPI.Areas.MedicalProvider
{
    [ApiController]
    [Route("api/[area]/[controller]")]
    public abstract class MedicalProviderController : ControllerBase
    {
    }
}

