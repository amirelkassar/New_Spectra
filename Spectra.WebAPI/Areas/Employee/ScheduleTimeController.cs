using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.Employees.ScheduleTimes.Commands;
using Spectra.Application.Employees.ScheduleTimes.Queries;
using Spectra.Application.Interfaces;
using Spectra.WebAPI.Areas.MedicalProvider;

namespace Spectra.WebAPI.Areas.Employee
{
    public class ScheduleTimeController(ILogger<ScheduleTimeController> logger, ICurrentUser currentUser, ISender sender) : EmployeeControllerBase<ScheduleTimeController>(logger, currentUser)
    {
        private readonly ISender _sender = sender;

        [HttpGet]
        [Route("list")]
        public async Task<IActionResult> GetListAsync()
        {
            var response = await _sender.Send(new GetEmployeeScheduleTimeListQuery());
            return Ok(response);
        }
        [HttpPost]
        public async Task<IActionResult> CreateAsync([FromBody] CreateScheduleTimeCommand input)
        {
            var response = await _sender.Send(input);
            return Created("", response);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAsync([FromBody] UpdateScheduleTimeCommand input)
        {
            var response = await _sender.Send(input);
            return Accepted(response);
        }


        [HttpDelete]
        public async Task<IActionResult> DeleteAsync([FromQuery] DeleteScheduleTimeCommand input)
        {
            var response = await _sender.Send(input);
            return NoContent();
        }
    }
}
