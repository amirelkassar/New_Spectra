using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.ServicesMD.Queries;

namespace Spectra.WebAPI.Areas.User
{
    public class ServiceController(ILogger<ServiceController> logger, ICurrentUser currentUser,
        IMediator mediator) : UserControllerBase<ServiceController>(logger, currentUser)
    {
        private readonly IMediator _mediator = mediator;

        [HttpGet]
        public async Task<IActionResult> GetListAsync([FromQuery] GetAllServiceForListingQuery input)
        {
            var response = await _mediator.Send(input);
            return Ok(response);
        }
    }
}
