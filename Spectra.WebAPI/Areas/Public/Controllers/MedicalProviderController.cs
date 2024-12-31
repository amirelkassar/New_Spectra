using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.Employees.Queries;
using Spectra.Application.Interfaces;

namespace Spectra.WebAPI.Areas.Public.Controllers
{
    public class MedicalProviderController(ILogger<MedicalProviderController> logger,
        ICurrentUser currentUser,
        ISender sender) : PublicControllerBase<MedicalProviderController>(logger, currentUser)
    {
        private readonly ISender _sender = sender;

        [HttpGet("list")]
        public async Task<IActionResult> GetListAsync([FromQuery] GetMedicalProvderListQuery input)
        {
            var response = await _sender.Send(input);
            return Ok(response);
        }

        [HttpGet()]
        public async Task<IActionResult> GetListAsync([FromQuery] string id)
        {
            var response = await _sender.Send(new GetEmployeeById
            {
                Id = id
            });
            return Ok(response);
        }
    }
}
