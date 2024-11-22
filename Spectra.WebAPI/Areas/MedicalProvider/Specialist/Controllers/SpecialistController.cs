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

namespace Spectra.WebAPI.Areas.MedicalProvider.Specialist.Controllers
{

    [Area("Specialist")]
    public class SpecialistController : MedicalProviderController
    {
        private readonly IMedicalProviderService _medicalProviderService;
        private readonly IChatService _chatService;
        private readonly IIdentityService _identityService;
        public SpecialistController(IMedicalProviderService medicalProviderService, IChatService chatService, ICurrentUser currentUser, IIdentityService identityService)
        {
            _medicalProviderService = medicalProviderService;

            _identityService = identityService;
        }


        public SpecialistController(IMedicalProviderService medicalProviderService, IChatService chatService)
        {

            _medicalProviderService = medicalProviderService;
            _chatService = chatService;

        }


        [HttpGet("AllClients/id")]
        [Authorize(MedicalProviderSpecialistPermissions.ReadList)]
        public async Task<ActionResult> GetAllClintsSpecialistCare(string id, [FromQuery] GetAllClientsInMedicalProviderProfileQuery input)
        {
            var Specialist = await _medicalProviderService.GetAllClintsMedicalProviderCare(id, input);
            return Ok(Specialist);
        }


        [HttpGet("SpecificService")]
        [Authorize(MedicalProviderSpecialistPermissions.ReadList)]
        public async Task<ActionResult> GetAllSpecialistSpecificService()
        {
            var Specialist = await _medicalProviderService.GetAllMedicalProviderSpecificServices();
            return Ok(Specialist);
        }


        [HttpGet("id")]
        [Authorize(MedicalProviderSpecialistPermissions.ReadOne)]
        public async Task<ActionResult> GetOneSpecialist(string id)
        {
            var Specialist = await _medicalProviderService.GetMedicalProviderById(id);
            return Ok(Specialist);
        }


        [HttpPost]
        [Authorize(MedicalProviderSpecialistPermissions.Create)]
        public async Task<ActionResult> CreateNormalSpecialist([FromForm] CreateEmployeeDto input)
        {

            var Specialist = await _medicalProviderService.CreateMedicalProvider(
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
                    input .Passowrd,
                    input .ConfirmationPassword
                    ,input.SpecializationId
                  /*  input.ScientificDegree*/);
            return Ok(Specialist);
        }


        [HttpPut("id")]
        
  [Authorize(MedicalProviderSpecialistPermissions.Update)]
        public async Task<ActionResult> UpdateSpecialist(string id, [FromForm] UpdateEmployeeDto input)
        {

            var Specialist = await _medicalProviderService.UpdateMedicalProvider(id, input);

            return Ok(Specialist);
        }

        [HttpDelete("id")]
        [Authorize(AdminMedicalProviderPermissions.Delete)]
        public async Task<ActionResult> DeleteSpecialist(string id)
        {
            var Specialist = await _medicalProviderService.DeleteMedicalProvider(id);
            return Ok(Specialist);
        }


    }

}

