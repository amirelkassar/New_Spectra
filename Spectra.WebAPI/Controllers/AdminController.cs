using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Admin.Commands;
using Spectra.Application.Admin.Queries;
using Spectra.Application.Clients.DTO;
using Spectra.Application.Clients.DTOs;
using Spectra.Application.Clients.Services;
using Spectra.Application.MedicalStaff.Doctors.Services;
using Spectra.Infrastructure.Admin;

namespace Spectra.WebAPI.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly IAdminService _adminService;
        private readonly IClientService _clientService;
        private readonly IDoctorService _DoctorService;


        public AdminController(IAdminService adminService , IClientService clientService, IDoctorService DoctorService)
        {
            _adminService = adminService;
            _clientService = clientService;
            _DoctorService = DoctorService;
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

        [HttpGet("AppointmentsDoctor")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllAppointmentsDoctor([FromQuery] GetAllAppointmentDoctorQuery input)
        {

            var appointmenties = await _adminService.GetAllAppointmentsDoctorAsync(input);
            return Ok(appointmenties); 
        }
        [HttpGet("Client/id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneClient(string id)
        {
            var clienties = await _clientService.GetClientById(id);
            return Ok(clienties);
        }
        [HttpGet("doctor/id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneDoctor(string id)
        {
            var Doctories = await _DoctorService.GetDoctorById(id);
            return Ok(Doctories);
        }

        [HttpPost("CreateClient")]
        [AllowAnonymous]
        public async Task<ActionResult> CreateNormalClient( CreateNormalClientDto input)
        {

            var clienties = await _clientService.CreateClient(input);
            return Ok(clienties);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateClient(string id, UpdateClientDto input)
        {


            var client = await _clientService.UpdateClient(id, input);

            return Ok(client);
        }



        [HttpPut(("ChangeStutue"))]
        [AllowAnonymous]
        // Admin change Stutues doctors From waiting to be cancel or avilibel
        public async Task<ActionResult> UpdateDoctors( UpdateDoctorEmploymentStatusCommand input)
        {

            var Appointment = await _adminService.UpdateDoctorsEmploymentStatus( input);

            return Ok(Appointment);
        }


    }
}
