using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.ScheduleAppointments.Appointments.Commands;
using Spectra.Application.ScheduleAppointments.Appointments.Queries;
using Spectra.Application.ScheduleAppointments.Appointments.Services;

namespace Spectra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AppointmentsController : ControllerBase
    {
        private readonly IAppointmentService _appointmentService;

        public AppointmentsController(IAppointmentService appointmentService)
        {

            _appointmentService = appointmentService;


        }


        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllAppointmentsDoctor([FromQuery] GetAllAppointmentsStatuDoctorQuery input)
        {
            var appointmenties = await _appointmentService.GetAllAppointmentsStatuDoctor(input);
            return Ok(appointmenties);
        }
        [HttpGet("AppointmentsStatusDoctor")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllAppointmentsStatusDoctor([FromQuery] GetAllAppointmentsStatuDoctorQuery input)
        {
            var appointmenties = await _appointmentService.GetAllAppointmentsStatuDoctor(input);
            return Ok(appointmenties);
        }

        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneAppointment(string id)
        {
            var appointmenties = await _appointmentService.GetAppointmentById(id);
            return Ok(appointmenties);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreateAppointment([FromBody] CreateAppointmentCommand input  )
        {
            var appointmenties = await _appointmentService.CreateAppointment(input);
            return Ok(appointmenties);
        }
    
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateAppointment(string id, UpdateAppointmentCommand input)
        {


            var Appointment = await _appointmentService.UpdateAppointment(id, input);

            return Ok(Appointment);
        }
  

        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteAppointment(string id)
        {
            var Appointment = await _appointmentService.DeleteAppointment(id);
            return Ok(Appointment);
        }

    }
}
