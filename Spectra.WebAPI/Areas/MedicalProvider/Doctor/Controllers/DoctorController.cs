using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.ChatHub.Services;
using Spectra.Application.Employees.Dto;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Queries;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Services;
using Spectra.Application.Identities;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Constants.Permissions.Admin.Users;
using Spectra.Domain.Shared.Constants.Permissions.MedicalProvider;

namespace Spectra.WebAPI.Areas.MedicalProvider.Doctor.Controllers
{

    [Area("Doctor")]
    public class DoctorController : MedicalProviderController
    {
        private readonly IMedicalProviderService _medicalProviderService;
        

        public DoctorController(IMedicalProviderService medicalProviderService)
        {
            _medicalProviderService = medicalProviderService;
          
        }

        [HttpGet("AllClients/id")]
        [Authorize(MedicalProviderDoctorPermissions.ReadList)]
        public async Task<ActionResult> GetAllClintsDoctorCare(string id, [FromQuery] GetAllClientsInMedicalProviderProfileQuery input)
        {
            var doctor = await _medicalProviderService.GetAllClintsMedicalProviderCare(id, input);
            return Ok(doctor);
        }

        [HttpGet("SpecificService")]
        [Authorize(MedicalProviderDoctorPermissions.ReadList)]
        public async Task<ActionResult> GetAllDoctorSpecificService()
        {
            var doctor = await _medicalProviderService.GetAllMedicalProviderSpecificServices();
            return Ok(doctor);
        }


        [HttpGet("id")]
        [Authorize(MedicalProviderDoctorPermissions.ReadOne)]
        public async Task<ActionResult> GetOneDoctor(string id)
        {
            var doctor = await _medicalProviderService.GetMedicalProviderById(id);
            return Ok(doctor);
        }

        [HttpPost]
        [Authorize(MedicalProviderDoctorPermissions.Create)]
        public async Task<ActionResult> CreateNormalDoctor([FromForm] CreateEmployeeDto input)
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
                    input.SpecializationIds,
                    input.HumenGenders,
                    input.LicenseNumber,
                    input.JobTypes,
                    input.Passowrd,
                    input.ConfirmationPassword,
                    input.SpecializationId
                  /*  input.ScientificDegree*/);
            return Ok(doctor);
        }
        [HttpPut("id")]
        [Authorize(MedicalProviderDoctorPermissions.Update)]
        public async Task<ActionResult> UpdateDoctor(string id, [FromForm] UpdateEmployeeDto input)
        {


            var doctor = await _medicalProviderService.UpdateMedicalProvider(id, input);

            return Ok(doctor);
        }
        [HttpDelete("id")]
        [Authorize(AdminMedicalProviderPermissions.Delete)]
        public async Task<ActionResult> DeleteDoctor(string id)
        {
            var doctor = await _medicalProviderService.DeleteMedicalProvider(id);
            return Ok(doctor);
        }


    }

}

