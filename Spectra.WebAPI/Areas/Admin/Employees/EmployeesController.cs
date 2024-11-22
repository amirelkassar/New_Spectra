using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Domain.Shared.Constants.Permissions.Admin.Users;
using Spectra.Infrastructure.Admin;

namespace Spectra.WebAPI.Areas.Admin.Employees
{
    [Area("Admin")]
    [Authorize]
    public class EmployeesController : AdminBaseController
    {
        private readonly IManagementStaffService _managementStaffService;
        public EmployeesController(IAdminService adminService, IManagementStaffService managementStaffService)
        {
            _managementStaffService = managementStaffService;
        }


        [HttpGet("list")]
        [Authorize(AdminEmployeesPermissions.ReadList)]
        public async Task<IActionResult> GetAllAsync([FromQuery] GetAllManagementStaffQuery input)
        {
            var appointmenties = await _managementStaffService.GetAllAsync(input);
            return Ok(appointmenties);
        }

        [HttpGet()]
        [Authorize(AdminEmployeesPermissions.ReadList)]
        public async Task<IActionResult> GetByIdAsync([FromQuery] GetManagementStaffByIdQuery input)
        {
            var appointmenties = await _managementStaffService.GetByIdAsync(input.Id);
            return Ok(appointmenties);
        }

        [HttpDelete]
        [Authorize(AdminEmployeesPermissions.Delete)]
        public async Task<IActionResult> DeleteAsync([FromBody] DeleteManagementStaffCommand input)
        {
            var employees = await _managementStaffService.DeleteAsync(input.Id);
            return NoContent();
        }

        [HttpPost]
        [Authorize(AdminEmployeesPermissions.Create)]
        public async Task<IActionResult> CreateAsync([FromBody] CreateStaffDto input)
        {
            var employees = await _managementStaffService.CreateAsync(input);
            return Created("", employees);
        }

        [HttpPut]
        [Authorize(AdminEmployeesPermissions.Update)]
        public async Task<IActionResult> UpdateAsync([FromBody] UpdateStaffDto input)
        {
            var employee = await _managementStaffService.UpdateAsync(input);
            return Accepted(employee);
        }

    }

}
