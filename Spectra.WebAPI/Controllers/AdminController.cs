using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Admin.Commands;
using Spectra.Application.Admin.Queries;
using Spectra.Application.Clients.DTOs;
using Spectra.Infrastructure.Admin;

namespace Spectra.WebAPI.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly IAdminService _adminService;

        public AdminController(IAdminService adminService)
        {
            _adminService = adminService;
        }
        [HttpGet("GetAllDoctors")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllDoctors([FromQuery] GetAllDoctorEmpQuery input)
        {
            var appointmenties = await _adminService.GetAllDoctorsWithPagination(input);
            return Ok(appointmenties);
        }  
        [HttpGet("GetAllClient")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllClients([FromQuery] GetAllClientsQuery input)
        {
            var appointmenties = await _adminService.GetAllClientsAsyncWithPagination(input);
            return Ok(appointmenties);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllAppointmentsDoctor([FromQuery] GetAllAppointmentDoctorQuery input)
        {

            var appointmenties = await _adminService.GetAllAppointmentsDoctorAsync(input);
            return Ok(appointmenties); 
        }
        [HttpPost("CreateClient")]
        [AllowAnonymous]
        public async Task<ActionResult> CreateNormalClient( CreateNormalClientDto input)
        {


            var clienties = await _adminService.CreateClientByAdmin(input);
            return Ok(clienties);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        // Admin change Stutues doctor From waiting to be cancel or avilibel
        public async Task<ActionResult> UpdateDoctor(string id, UpdateDoctorEmploymentStatusCommand input)
        {


            var Appointment = await _adminService.UpdateDoctorEmploymentStatus(id, input);

            return Ok(Appointment);
        }
        [HttpPut(("AddDoctors"))]
        [AllowAnonymous]
        // Admin change Stutues doctors From waiting to be cancel or avilibel
        public async Task<ActionResult> UpdateDoctors( UpdateDoctorEmploymentStatusCommand input)
        {


            var Appointment = await _adminService.UpdateDoctorsEmploymentStatus( input);

            return Ok(Appointment);
        }


    }
}
