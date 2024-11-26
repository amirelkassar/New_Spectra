using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.AppUsers.Commands;
using Spectra.Application.Identities.ApiParams;
using Spectra.Application.Interfaces;

namespace Spectra.WebAPI.Areas.Public.Controllers
{
    public class IdentityController(ILogger<IdentityController> logger,
        ICurrentUser currentUser,
        IAuthenticationService authenticationService,
        IMediator mediator) : PublicControllerBase<IdentityController>(logger, currentUser)
    {
        private readonly IAuthenticationService _authenticationService = authenticationService;
        private readonly IMediator _mediator = mediator;

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> LoginAsync([FromBody] LoginAPIParam input)
        {
            var validatingResponse = await _authenticationService.ValidateUserAsync(input);
            if (!validatingResponse.SuccessOpration)
            {
                return BadRequest(validatingResponse);
            }
            var loginResponse = await _authenticationService.LoginAsync(input);
            return loginResponse.SuccessOpration ? Ok(loginResponse) : BadRequest(loginResponse);
        }
        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> RegisterAsync([FromForm] RegisterUserCommand input)
        {
            var response = await _mediator.Send(input);
            return response.SuccessOpration
                ? Created("", response)
                : BadRequest(response);
        }
    }
}
