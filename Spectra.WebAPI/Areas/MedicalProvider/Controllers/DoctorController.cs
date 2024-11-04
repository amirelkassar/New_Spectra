using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.ChatHub.Services;
using Spectra.Application.Employees.MedicalStaff.Doctors.Dto;
using Spectra.Application.Employees.MedicalStaff.Doctors.Queries;
using Spectra.Application.Employees.MedicalStaff.Doctors.Services;


namespace Spectra.WebAPI.Areas.MedicalProvider.Controllers
{
    [ApiController]
    [Route("api/[area]/[controller]")]
    [Area("MedicalProvider")]
    public class DoctorController : ControllerBase
    {
        private readonly IDoctorService _doctorService;
        private readonly IChatService _chatService;


        public DoctorController(IDoctorService DoctorService, IChatService chatService)
        {

            _doctorService = DoctorService;
            _chatService = chatService;

        }


        [HttpGet("AllClients/id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllClintsDoctorCare(string id ,[ FromQuery] GetAllClientsInDoctorProfileQuery input)
        {
            var doctor = await _doctorService.GetAllClintsDoctorCare  ( id, input);
            return Ok(doctor);
        }

        [HttpGet("SpecificService")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllDoctorSpecificService()
        {
            var doctor = await _doctorService.GetAllDoctorSpecificServices();
            return Ok(doctor);
        }


        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneDoctor(string id)
        {
            var doctor = await _doctorService.GetDoctorById(id);
            return Ok(doctor);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreateNormalDoctor([FromForm] CreateManagementStaffDto input)
        {


            var doctor = await _doctorService.CreateDoctor(
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
        public async Task<ActionResult> UpdateDoctor(string id, [FromForm] UpdateDoctorDto input)
        {


            var doctor = await _doctorService.UpdateDoctor(id, input);

            return Ok(doctor);
        }
        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteDoctor(string id)
        {
            var doctor = await _doctorService.DeleteDoctor(id);
            return Ok(doctor);
        }


    }

}

