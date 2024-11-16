using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.ChatHub.Services;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Dto;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Queries;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Services;

namespace Spectra.WebAPI.Areas.MedicalProvider.Doctor.Controllers
{

    [Area("Doctor")]
    public class DoctorController : MedicalProviderController
    {
        private readonly IMedicalProviderService _medicalProviderService;
        private readonly IChatService _chatService;
        public DoctorController(IMedicalProviderService DoctorService, IChatService chatService)
        {

            _medicalProviderService = DoctorService;
            _chatService = chatService;

        }


        [HttpGet("AllClients/id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllClintsDoctorCare(string id, [FromQuery] GetAllClientsInMedicalProviderProfileQuery input)
        {
            var doctor = await _medicalProviderService.GetAllClintsMedicalProviderCare(id, input);
            return Ok(doctor);
        }

        [HttpGet("SpecificService")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllDoctorSpecificService()
        {
            var doctor = await _medicalProviderService.GetAllMedicalProviderSpecificServices();
            return Ok(doctor);
        }


        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneDoctor(string id)
        {
            var doctor = await _medicalProviderService.GetMedicalProviderById(id);
            return Ok(doctor);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreateNormalDoctor([FromForm] CreateManagementStaffDto input)
        {


            var doctor = await _medicalProviderService.CreateMedicalProvider(
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
                    input.JobTypes
                  /*  input.ScientificDegree*/);
            return Ok(doctor);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateDoctor(string id, [FromForm] UpdateDoctorDto input)
        {


            var doctor = await _medicalProviderService.UpdateMedicalProvider(id, input);

            return Ok(doctor);
        }
        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteDoctor(string id)
        {
            var doctor = await _medicalProviderService.DeleteMedicalProvider(id);
            return Ok(doctor);
        }


    }

}

