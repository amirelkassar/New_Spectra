using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.ChatHub.Services;
using Spectra.Application.MedicalStaff.Doctors.Dto;
using Spectra.Application.MedicalStaff.Doctors.Services;

namespace Spectra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DoctorController : ControllerBase
    {
        private readonly IDoctorService _DoctorService;
        private readonly IChatService _chatService;


        public DoctorController(IDoctorService DoctorService, IChatService chatService)
        {

            _DoctorService = DoctorService;
            _chatService = chatService;

        }


        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllDoctors()
        {
            var Doctories = await _DoctorService.GetAllDoctors();
            return Ok(Doctories);
        }

        [HttpGet("SpecificService")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllDoctorSpecificService()
        {
            var Doctories = await _DoctorService.GetAllDoctorSpecificServices();
            return Ok(Doctories);
        }


        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneDoctor(string id)
        {
            var Doctories = await _DoctorService.GetDoctorById(id);
            return Ok(Doctories);
        }
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreateNormalDoctor([FromForm] CreateDoctorDto input)
        {


            var Doctories = await _DoctorService.CreateDoctor(
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
            return Ok(Doctories);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateDoctor(string id, [FromForm] UpdateDoctorDto input)
        {


            var Doctor = await _DoctorService.UpdateDoctor(id, input);

            return Ok(Doctor);
        }
        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteDoctor(string id)
        {
            var Doctor = await _DoctorService.DeleteDoctor(id);
            return Ok(Doctor);
        }


    }

}

