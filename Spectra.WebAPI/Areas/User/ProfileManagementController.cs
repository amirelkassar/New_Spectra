using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.AppUsers.ProfileManagement.Commands;
using Spectra.Application.AppUsers.ProfileManagement.Queries;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Constants;
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

        [HttpPut()]
        [Authorize(Roles = $"{Roles.Client},{Roles.SystemAdmin}")]
        public async Task<IActionResult> UpdateAsync([FromForm] UpdateUserProfileCommand input)
        {
            var response = await _mediator.Send(input);
            return Accepted("",response);
        }

        [HttpPut("employee-profile")]
        [Authorize(Roles =$"{Roles.Doctor},{Roles.CustomerSupport},{Roles.Specialist},{Roles.Accountant},{Roles.ServiceHead},{Roles.DepartmentHead}")]
        public async Task<IActionResult> UpdateAsync([FromForm] UpdateEmployeeProfileCommand input)
        {
            var response = await _mediator.Send(input);
            return Accepted("", response);
        }
    }
}
