using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Employees.Commands;
using Spectra.Application.Employees.Dto;
using Spectra.Application.Employees.EmployeeGroups.Commands;
using Spectra.Application.Employees.EmployeeGroups.Queries;
using Spectra.Application.Employees.Queries;
using Spectra.Application.Employees.Services;
using Spectra.Domain.Shared.Constants.Permissions.Admin.Users;
using Spectra.WebAPI.Areas.Admin.Employees.Models;

namespace Spectra.WebAPI.Areas.Admin.Employees
{
    public class EmployeesController(IEmployeeService employeeService, IMediator mediator) : AdminBaseController
    {
        private readonly IEmployeeService _employeeService = employeeService;
        private readonly IMediator _mediator = mediator;

        [HttpGet("employee-list")]
        [Authorize(AdminEmployeesPermissions.ReadList)]
        public async Task<IActionResult> GetEmployeeListAsync([FromQuery] GetEmployeeListQuery input)
        {
            var response = await _employeeService.GetEmployeeListAsync(input);
            return Ok(response);
        }

        [HttpGet("medical-provider-list")]
        [Authorize(AdminEmployeesPermissions.ReadList)]
        public async Task<IActionResult> GetMedicalProviderListAsync([FromQuery] GetMedicalProvderListQuery input)
        {
            var response = await _employeeService.GetMedicalProviderListAsync(input);
            return Ok(response);
        }

        [HttpGet()]
        [Authorize(AdminEmployeesPermissions.ReadList)]
        public async Task<IActionResult> GetByIdAsync([FromQuery] string id)
        {
            var response = await _employeeService.GetAsync(new GetEmployeeById
            {
                Id = id
            });
            return Ok(response);
        }

        [HttpDelete]
        [Authorize(AdminEmployeesPermissions.Delete)]
        public async Task<IActionResult> DeleteAsync([FromQuery] string id)
        {
            var response = await _employeeService.DeleteAsync(id);
            return NoContent();
        }

        [HttpPost]
        [Authorize(AdminEmployeesPermissions.Create)]
        public async Task<IActionResult> CreateAsync([FromBody] CreateEmployeeDto input)
        {
            var response = await _employeeService.CreateAsync(input);
            return Created("", response);
        }


        [HttpPut]
        [Authorize(AdminEmployeesPermissions.Update)]
        public async Task<IActionResult> UpdateAsync([FromForm] UpdateEmployeeDto input)
        {
            var response = await _employeeService.UpdateEmployeeAsync(input);
            return Accepted("", response);
        }

        [HttpPut("medical-data")]
        [Authorize(AdminEmployeesPermissions.Update)]
        public async Task<IActionResult> UpdateMedicalDataAsync([FromBody] UpdateMedicalDataCommand input)
        {
            var response = await _mediator.Send(input);
            return Accepted("", response);
        }
        [HttpPost("attachment")]
        [Authorize(AdminEmployeesPermissions.Create)]
        public async Task<IActionResult> CreateAttachmentAsync([FromForm] CreateAttachmentCommand input)
        {
            var response = await _employeeService.CreateAttachmentAsync(input);
            return Created("", response);
        }
        [HttpPut("attachment")]
        [Authorize(AdminEmployeesPermissions.Update)]
        public async Task<IActionResult> UpdatettachmentAsync([FromForm] UpdateAttachmentCommand input)
        {
            var response = await _employeeService.UpdateAttachmentAsync(input);
            return Accepted("", response);
        }

        [HttpDelete("attachment")]
        [Authorize(AdminEmployeesPermissions.Delete)]
        public async Task<IActionResult> DeleteAttachmentAsync([FromQuery] DeleteAttachmentModel input)
        {
            var response = await _employeeService.DeleteAttachmentAsync(input.FileId, input.EmployeeId);
            return NoContent();
        }

        [HttpPost("group-member")]
        [Authorize(AdminEmployeesPermissions.Create)]
        public async Task<IActionResult> AddGroupMemeberAsync([FromBody] UpdateEmployeeGroupCommand input)
        {
            var response = await _mediator.Send(input);
            return Created("", response);
        }

        [HttpDelete("group-member")]
        [Authorize(AdminEmployeesPermissions.Delete)]
        public async Task<IActionResult> RemoveGroupMemberAsync([FromQuery] RemoveEmployeeFromGroupCommand input)
        {
            var response = await _mediator.Send(input);
            return NoContent();
        }


        [HttpGet("group-member")]
        [Authorize(AdminEmployeesPermissions.ReadOne)]
        public async Task<IActionResult>  GetGroupMemeberAsync([FromQuery] GetEmployeeGroupMemeberListQuery input)
        {
            var response = await _mediator.Send(input);
            return Ok(response);
        }
    }

}
