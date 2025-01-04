using MediatR;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Employees.Commands;
using Spectra.Application.Employees.Dto;
using Spectra.Application.Employees.EmployeeGroups.Commands;
using Spectra.Application.Employees.EmployeeGroups.Queries;
using Spectra.Application.Employees.Queries;
using Spectra.Application.Employees.Services;
using Spectra.WebAPI.Areas.Admin.Employees.Models;

namespace Spectra.WebAPI.Areas.Admin.Employees
{
    public class EmployeesController(IEmployeeService employeeService, IMediator mediator) : AdminBaseController
    {
        private readonly IEmployeeService _employeeService = employeeService;
        private readonly IMediator _mediator = mediator;

        [HttpGet("employee-list")]
        public async Task<IActionResult> GetEmployeeListAsync([FromQuery] GetEmployeeListQuery input)
        {
            var response = await _employeeService.GetEmployeeListAsync(input);
            return Ok(response);
        }

        [HttpGet("medical-provider-list")]
        public async Task<IActionResult> GetMedicalProviderListAsync([FromQuery] GetMedicalProvderListQuery input)
        {
            var response = await _employeeService.GetMedicalProviderListAsync(input);
            return Ok(response);
        }

        [HttpGet()]
        public async Task<IActionResult> GetByIdAsync([FromQuery] string id)
        {
            var response = await _employeeService.GetAsync(new GetEmployeeById
            {
                Id = id
            });
            return Ok(response);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteAsync([FromQuery] string id)
        {
            var response = await _employeeService.DeleteAsync(id);
            return NoContent();
        }

        [HttpPost]
        public async Task<IActionResult> CreateAsync([FromBody] CreateEmployeeDto input)
        {
            var response = await _employeeService.CreateAsync(input);
            return Created("", response);
        }


        [HttpPut]
        public async Task<IActionResult> UpdateAsync([FromForm] UpdateEmployeeDto input)
        {
            var response = await _employeeService.UpdateEmployeeAsync(input);
            return Accepted("", response);
        }

        [HttpPut("medical-data")]
        public async Task<IActionResult> UpdateMedicalDataAsync([FromBody] UpdateMedicalDataCommand input)
        {
            var response = await _mediator.Send(input);
            return Accepted("", response);
        }
        [HttpPost("attachment")]
        public async Task<IActionResult> CreateAttachmentAsync([FromForm] CreateAttachmentCommand input)
        {
            var response = await _employeeService.CreateAttachmentAsync(input);
            return Created("", response);
        }
        [HttpPut("attachment")]
        public async Task<IActionResult> UpdatettachmentAsync([FromForm] UpdateAttachmentCommand input)
        {
            var response = await _employeeService.UpdateAttachmentAsync(input);
            return Accepted("", response);
        }

        [HttpDelete("attachment")]
        public async Task<IActionResult> DeleteAttachmentAsync([FromQuery] DeleteAttachmentModel input)
        {
            var response = await _employeeService.DeleteAttachmentAsync(input.FileId, input.EmployeeId);
            return NoContent();
        }

        [HttpPost("group-member")]
        public async Task<IActionResult> AddGroupMemeberAsync([FromBody] UpdateEmployeeGroupCommand input)
        {
            var response = await _mediator.Send(input);
            return Created("", response);
        }

        [HttpDelete("group-member")]
        public async Task<IActionResult> RemoveGroupMemberAsync([FromQuery] RemoveEmployeeFromGroupCommand input)
        {
            var response = await _mediator.Send(input);
            return NoContent();
        }


        [HttpGet("group-member")]
        public async Task<IActionResult> GetGroupMemeberAsync([FromQuery] GetEmployeeGroupMemeberListQuery input)
        {
            var response = await _mediator.Send(input);
            return Ok(response);
        }
    }

}
