using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Patients.Commands;
using Spectra.Infrastructure.Patients;

namespace Spectra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PatientController : ControllerBase
    {

        private readonly IPatientService _patientService;

        public PatientController(IPatientService patientService)
        {

            _patientService = patientService;

        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllPatients()
        {
            var Patienties = await _patientService.GetAllPatients();
            return Ok(Patienties);
        }

        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOnePatient(string id)
        {
            var Patienties = await _patientService.GetPatientById(id);
            return Ok(Patienties);
        }
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreatePatient(CreatePatientCommand input)
        {
            var Patienties = await _patientService.CreatePatient(input);
            return Ok(Patienties);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdatePatient(string id, UpdatePatientCommand input)
        {


            var Patienties = await _patientService.UpdatePatient(id, input.Name,
                    input.Gender, input.RelationToClient, input.DateOfBirth, input.NationalId);
            return Ok(Patienties);
        }
        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeletePatient(string id)
        {
            var Patienties = await _patientService.DeletePatient(id);
            return Ok(Patienties);
        }

    }
}
