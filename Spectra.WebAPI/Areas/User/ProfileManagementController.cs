using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.AppUsers.ProfileManagement.Commands;
using Spectra.Application.AppUsers.ProfileManagement.Queries;
using Spectra.Application.Employees.Queries;
using Spectra.Application.Identities;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Constants;
namespace Spectra.WebAPI.Areas.User
{
    public class ProfileManagementController(ILogger<ProfileManagementController> logger,
        ICurrentUser currentUser,
        IMediator mediator,
        IPermissionManager permissionManager) : UserControllerBase<ProfileManagementController>(logger, currentUser)
    {
        private readonly IMediator _mediator = mediator;
        private readonly IPermissionManager _permissionManager = permissionManager;

        [HttpGet]
        public async Task<IActionResult> GetAsync([FromQuery] GetUserProfileDataQuery input)
        {
            var response = await _mediator.Send(input);
            return Ok(response);
        }

        [HttpGet("auth-info")]
        public async Task<IActionResult> GetPermissionListAsync()
        {
            var permissions = await _permissionManager.GetUserPermissionList(CurrentUser.Id);
            var response = new
            {
                CurrentUser.Role,
                Permissions = permissions
            };
            return Ok(response);
        }

        [HttpGet("attchment-list")]
        [Authorize(Roles = $"{Roles.Doctor},{Roles.CustomerSupport},{Roles.Specialist},{Roles.Accountant},{Roles.ServiceHead},{Roles.DepartmentHead}")]
        public async Task<IActionResult> GetAttachmentListAsync([FromQuery] GetDoctorAttchmentListByUserId input)
        {
            var response = await _mediator.Send(input);
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
