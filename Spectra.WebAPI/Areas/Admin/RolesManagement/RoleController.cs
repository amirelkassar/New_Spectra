using MediatR;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.AppRoles.Permissions.Commands;
using Spectra.Application.AppRoles.Permissions.Queries;
using Spectra.Application.AppRoles.Queries;

namespace Spectra.WebAPI.Areas.Admin.RolesManagement
{
    public class RoleController(IMediator mediator) : AdminBaseController
    {
        private readonly IMediator _mediator = mediator;

        [HttpGet("list")]
        public async Task<IActionResult> GetListAsync()
        {
            var response = await _mediator.Send(new GetRoleListQuery { });
            return Ok(response);
        }

        [HttpGet("permission-list")]
        public async Task<IActionResult> GetPermissionListByIdAsync([FromQuery] GetRolePermissionListByIdQuery input)
        {
            var response = await _mediator.Send(input);
            return Ok(response);
        }

        [HttpPut("permission-list")]
        public async Task<IActionResult> UpdatePermissionAsync([FromBody] UpdateRolePermissionCommand input)
        {
            var response = await _mediator.Send(input);
            return Accepted(response);
        }
    }
}
