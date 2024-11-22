using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Employees.Commands;
using Spectra.Application.Employees.Dto;
using Spectra.Application.Employees.Queries;
using Spectra.Application.Employees.Services;
using Spectra.Domain.Shared.Constants.Permissions.Admin.Users;

namespace Spectra.WebAPI.Areas.Admin.MedicalProvider
{
    [Area("Admin")]
    [Authorize]
    public class MedicalProviderController(IAdminEmployeeService adminMedicalProviderService) : AdminBaseController
    {
        private readonly IAdminEmployeeService _adminMedicalProviderService = adminMedicalProviderService;

        [HttpGet("list")]
        [Authorize(AdminMedicalProviderPermissions.ReadList)]
        public async Task<ActionResult> GetListAsync([FromQuery] GetEmployeeListQuery input)
        {
            var appointmenties = await _adminMedicalProviderService.GetListAsync(input);
            return Ok(appointmenties);
        }
        [HttpGet]
        [Authorize(AdminMedicalProviderPermissions.ReadOne)]
        public async Task<ActionResult> GetAsync([FromQuery]string id)
        {
            var response = await _adminMedicalProviderService.GetAsync(id);
            return Ok(response);
        }

        [HttpPost]
        [Authorize(AdminMedicalProviderPermissions.Create)]
        public async Task<ActionResult> CreateAsync([FromBody] CreateEmployeeDto input)
        {
            var response = await _adminMedicalProviderService.CreateAsync(input);
            return Ok(response);
        }

        [HttpPut("personal-data")]
        [Authorize(AdminMedicalProviderPermissions.Update)]
        public async Task<ActionResult> UpdatePersonalDataAsync([FromBody] UpdateEmployeeDto input)
        {

            var response = await _adminMedicalProviderService.UpdatePersonalDataAsync(input);
            return Accepted(response);
        }

        [HttpPut("medical-data")]
        [Authorize(AdminMedicalProviderPermissions.Update)]
        public async Task<ActionResult> UpdateMedicalDataAsync([FromBody] UpdateMedicalDataCommand input)
        {

            var response = await _adminMedicalProviderService.UpdateMedicallDataAsync(input);
            return Accepted(response);
        }

        [HttpDelete]
        [Authorize(AdminMedicalProviderPermissions.Delete)]
        public async Task<IActionResult> DeleteAsync([FromQuery] string id)
        {
            var response = await _adminMedicalProviderService.DeleteAsync(id);
            return NotFound();
        }
    }
}
