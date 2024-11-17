using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.Identities.ApiParams;
using Spectra.Application.Interfaces;


namespace Spectra.WebAPI.Areas.Public.Controllers
{
    [ApiController]
    [Area("public")]
    [Route("api/[area]/[controller]")]
    public class IdentityController(ILogger<IdentityController> logger, ICurrentUser currentUser, IAuthenticationService authenticationService) : SpectraControllerBase<IdentityController>(logger, currentUser)
    {
        private readonly IAuthenticationService _authenticationService = authenticationService;

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> LoginAsync([FromBody] LoginAPIParam input)
        {
            var validatingResponse=await _authenticationService.ValidateUserAsync(input);
            if (!validatingResponse.SuccessOpration) 
            {
                return BadRequest(validatingResponse);
            }
            var loginResponse= await _authenticationService.LoginAsync(input);
            return loginResponse.SuccessOpration? Ok(loginResponse) : BadRequest(loginResponse);
        }
    }
}
