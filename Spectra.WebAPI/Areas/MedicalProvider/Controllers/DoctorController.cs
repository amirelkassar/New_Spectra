using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.ChatHub.Services;
using Spectra.Application.Employees.MedicalStaff.Doctors.Dto;
using Spectra.Application.Employees.MedicalStaff.Doctors.Queries;
using Spectra.Application.Employees.MedicalStaff.Doctors.Services;
using Spectra.Infrastructure.ChatHub;

namespace Spectra.WebAPI.Areas.MedicalProvider.Controllers
{
    [ApiController]
    [Route("api/[area]/[controller]")]
    [Area("MedicalProvider")]
    public class DoctorController : ControllerBase
    {
        private readonly IDoctorService _DoctorService;
        private readonly IChatService _chatService;


        public DoctorController(IDoctorService DoctorService, IChatService chatService)
        {

            _DoctorService = DoctorService;
            _chatService = chatService;

        }


        [HttpGet("AllClients")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllClintsDoctorCare([FromQuery] GetAllClientsInDoctorProfileQuery input)
        {
            var doctor = await _DoctorService.GetAllClintsDoctorCare(input);
            return Ok(doctor);
        }

        [HttpGet("SpecificService")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllDoctorSpecificService()
        {
            var doctor = await _DoctorService.GetAllDoctorSpecificServices();
            return Ok(doctor);
        }


        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneDoctor(string id)
        {
            var doctor = await _DoctorService.GetDoctorById(id);
            return Ok(doctor);
        }
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreateNormalDoctor([FromForm] CreateManagementStaffDto input)
        {


            var doctor = await _DoctorService.CreateDoctor(
                    input.FirstName,
                    input.LastName,
                    input.Prefix,
                    input.PhoneNumbers,
                    input.CountryCode,
                    input.Emailaddress,
                    input.Country,
                    input.City,
                    input.NationalId,
                    input.Academicdegree,
                    input.ApprovedBy,
                    input.Diagnoses,
                    input.HumenGenders,
                    input.LicenseNumber,
                    input.ScientificDegree);
            return Ok(doctor);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateDoctor(string id, [FromForm] UpdateManagementStaffDto input)
        {


            var doctor = await _DoctorService.UpdateDoctor(id, input);

            return Ok(doctor);
        }
        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteDoctor(string id)
        {
            var doctor = await _DoctorService.DeleteDoctor(id);
            return Ok(doctor);
        }


    }

}

