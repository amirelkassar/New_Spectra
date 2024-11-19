using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Admin.Dto;
using Spectra.Application.Admin.Queries;
using Spectra.Application.Contracts.Services;
using Spectra.Application.Employees.ManagementStaff.Commands.Dto;
using Spectra.Application.Employees.ManagementStaff.Service;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Services;
using Spectra.Domain.Shared.Constants.Permissions.MasterDataPermissons;
using Spectra.Domain.Shared.Enums;
using Spectra.Infrastructure.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.WebAPI.Areas.Admin.Controllers
{
    [Area("Admin/Employees")]
    [Authorize]
    public class AdminEmployeesController : BassAdminController
    {
        private readonly IAdminService _adminService;
    
        private readonly IManagementStaffService _managementStaffService;
        public AdminEmployeesController(IAdminService adminService, IManagementStaffService managementStaffService)
        {
            _adminService = adminService;
            _managementStaffService = managementStaffService;
        }
    

        [HttpGet("GetAllEmployees")]
        [Authorize(AdminEmployeesPermissions.ReadList)]
        public async Task<ActionResult> GetAllEmployees([FromQuery] GetAllEmployeesQuery input)
        {
            var appointmenties = await _adminService.GetAllEmplyees(input);
            return Ok(appointmenties);
        }
        [HttpPost("CreateEmployee")]
        [Authorize(AdminEmployeesPermissions.Create)]
        public async Task<ActionResult> CreateEmployees([FromForm] CreateEmployeesDto input)
        {

            var employees = await _adminService.CreateEmplyee(input);
            return Ok(employees);
        }

        [HttpGet("GetOneOfNormalStaff/id")]
        [Authorize(AdminEmployeesPermissions.ReadOne)]
        public async Task<ActionResult> GetOneOfNormalStaff(string id, JobTypes input)
        {
            var clients = await _adminService.GetEmployeeByid(id, input);
            return Ok(clients);
        }
        [HttpPut("EditEmployee/id")]
        [Authorize(AdminEmployeesPermissions.Update)]
        public async Task<ActionResult> UpdateNormalStaff(string id, UpdateManagementStaffDto input)
        {
            var employee = await _managementStaffService.UpdateEmployees(id,
              input.FirstName,
              input.LastName,
              input.Prefix,
              input.PhoneNumbers,
              input.CountryCode,
              input.Emailaddress,
              input.Country,
              input.City,
              input.NationalId,
              input.HumenGenders,
              input.JobName,
              input.Qualifications,
              input.TimeToJoin,
              input.WorkingHours,
              input.JobType);
            return Ok(employee);
        }

    }

}
