using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.PlatformServices.Queries;

namespace Spectra.WebAPI.Areas.Public.Controllers
{
    public class ServiceController(ILogger<ServiceController> logger,
        ICurrentUser currentUser,
        IMediator mediator) : PublicControllerBase<ServiceController>(logger, currentUser)
    {
        private readonly IMediator _mediator = mediator;

        [HttpGet("list")]
        public async Task<ActionResult> GetAllForListing([FromQuery] GetAllPublicServiceListQuery input)
        {
            var masterDataServices = await _mediator.Send(input);

            return Ok(masterDataServices);
        }


        [HttpGet("list-display")]
        public async Task<ActionResult> GetAllForDisplaying([FromQuery] GetAllPublicServiceListQuery input)
        {
            var masterDataServices = await _mediator.Send(input);

            return Ok(masterDataServices);
        }

        [HttpGet()]
        public async Task<ActionResult> GetById([FromQuery] GetPublicServiceByIdQuery input)
        {
            var masterDataService = await _mediator.Send(input);
            return Ok(masterDataService);
        }
    }
}
