using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.AppUsers.ProfileManagement.Commands;
using Spectra.Application.AppUsers.ProfileManagement.Queries;
using Spectra.Application.Interfaces;
namespace Spectra.WebAPI.Areas.User
{
    public class ProfileManagementController(ILogger<ProfileManagementController> logger,
        ICurrentUser currentUser,
        IMediator mediator) : UserControllerBase<ProfileManagementController>(logger, currentUser)
    {
        private readonly IMediator _mediator = mediator;

        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var response = await _mediator.Send(new GetUserProfileDataQuery());
            return Ok(response);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAsync([FromForm] UpdateUserDataCommand input)
        {
            var response = await _mediator.Send(input);
            return Accepted("",response);
        }
    }
}
