using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Admin.Queries;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Dto;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Queries;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Services;
using Spectra.Application.Employees.MedicalTeams.Commands;
using Spectra.Application.Employees.MedicalTeams.Services;
using Spectra.Domain.Shared.Constants.Permissions.Admin.Users;
using Spectra.Infrastructure.Admin;

namespace Spectra.WebAPI.Areas.Admin.MedicalProvider
{
    [Area("MedicalProvider")]
    [Authorize]
    public class MedicalProviderController : BassAdminController
    {
        private readonly IAdminService _adminService;
        private readonly IMedicalProviderService _doctorService;
        private readonly IMedicalTeamService _medicalTeamService;

        public MedicalProviderController(IAdminService adminService,
        IMedicalProviderService doctorService, IMedicalTeamService medicalTeamService)
        {
            _adminService = adminService;
            _doctorService = doctorService;
            _medicalTeamService = medicalTeamService;
        }


        [HttpGet("AppointmentsDoctor")]
        [Authorize(AdminMedicalProviderPermissions.ReadList)]
        public async Task<ActionResult> GetAllAppointmentsDoctor([FromQuery] GetAllAppointmentDoctorQuery input)
        {

            var appointmenties = await _adminService.GetAllAppointmentsDoctorAsync(input);
            return Ok(appointmenties);
        }
        [HttpGet("GetAllDoctors")]
        [Authorize(AdminMedicalProviderPermissions.ReadList)]
        public async Task<ActionResult> GetAllDoctors([FromQuery] GetAllDoctorEmpQuery input)
        {
            var appointmenties = await _adminService.GetAllDoctorsWithPagination(input);
            return Ok(appointmenties);
        }
        [HttpGet("GetDoctor/id")]
        [Authorize(AdminMedicalProviderPermissions.ReadOne)]
        public async Task<ActionResult> GetOneDoctor(string id)
        {
            var Doctories = await _doctorService.GetMedicalProviderById(id);
            return Ok(Doctories);
        }

        [HttpPut("EditDocotor/id")]
        [Authorize(AdminMedicalProviderPermissions.Update)]
        public async Task<ActionResult> UpdateDocotor(string id, UpdateDoctorDto input)
        {

            var contract = await _doctorService.UpdateMedicalProvider(id, input);
            return Ok(contract);
        }

        [HttpPost("CreateMedicalTeam")]
        [Authorize(AdminMedicalProviderPermissions.Create)]
        public async Task<ActionResult> CreateMedicalTeam(CreateMedicalTeamCommand input)
        {

            var employees = await _medicalTeamService.CreateMedicalTeam(input);
            return Ok(employees);
        }

        [HttpPut("EditMedicalTeam/id")]
        [Authorize(AdminMedicalProviderPermissions.Update)]
        public async Task<ActionResult> UpdateMedicalTeam(string id, UpdateMedicalTeamCommand input)
        {

            var employees = await _medicalTeamService.UpdateMedicalTeam(id, input);
            return Ok(employees);
        }
        [HttpPut("ClientsFellowDoctor/id")]
        [Authorize(AdminMedicalProviderPermissions.ReadList)]
        public async Task<ActionResult> GetAllClientsFellowDoctor(string id, [FromQuery] GetAllClientsInMedicalProviderProfileQuery input)
        {
            var clients = await _doctorService.GetAllClintsMedicalProviderCare(id, input);
            return Ok(clients);
        }
    }
}
