using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.Employees.Queries;
using Spectra.Application.Interfaces;

namespace Spectra.WebAPI.Areas.EmployeeHead
{
    public class EmployeeController(ILogger<EmployeeController> logger, ICurrentUser currentUser, ISender sender) : EmployeeHeadControllerBase<EmployeeController>(logger, currentUser)
    {
        private readonly ISender _sender = sender;

        [HttpGet]
        public async Task<IActionResult> GetAsync([FromQuery] GetEmployeeForSectionHeadByIdQuery input)
        {
            var response = await _sender.Send(input);
            return Ok(response);
        }

        [HttpGet("list")]
        public async Task<IActionResult> GetListAsync([FromQuery] GetEmployeeListByHeadDepartmentQuery input)
        {
            var response = await _sender.Send(input);
            return Ok(response);
        }
    }
}
