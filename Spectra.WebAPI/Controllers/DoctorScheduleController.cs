using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.ScheduleAppointments.DoctorSchedules;
using Spectra.Application.ScheduleAppointments.DoctorSchedules.Commands;
using Spectra.Application.ScheduleAppointments.DoctorSchedules.DTO;
using Spectra.Application.ScheduleAppointments.DoctorSchedules.Queries;

namespace Spectra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class DoctorScheduleController : ControllerBase
    {
        private readonly IDoctorScheduleService _service;

        public DoctorScheduleController(IDoctorScheduleService service)
        {
            _service = service;
        }

        [HttpGet("DoctorSchedules")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllDoctorSchedule([FromQuery] GetAllDoctorSchedulesQuery input)
        {
            var DoctorScheduleies = await _service.GetAllDoctorSchedules(input);

            return Ok(DoctorScheduleies);
        }



        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneDoctorSchedule(string id)
        {
            var DoctorScheduleies = await _service.GetDoctorScheduleById(id);
            return Ok(DoctorScheduleies);
        }


        [HttpPost]
        [AllowAnonymous]

        public async Task<ActionResult> CreateDoctorSchedule(CreateDoctorScheduleDto input)
        {

            var DoctorScheduleies = await _service.CreateDoctorSchedule(input);

            return Ok(DoctorScheduleies);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateDoctorSchedule(string id, UpdateDoctorScheduleCommand input)
        {
            var DoctorScheduleies = await _service.UpdateDoctorSchedule(id, input);

            return Ok(DoctorScheduleies);
        }
        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteDoctorSchedule(string id)
        {
            var delete = await _service.DeleteDoctorSchedule(id);
            return Ok(delete);
        }


    }

}

