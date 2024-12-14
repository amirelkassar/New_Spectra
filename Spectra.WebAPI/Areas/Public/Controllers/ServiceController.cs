using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.ServicesMD.Queries;
using Spectra.Application.MasterData.ServicesMD.Services;

namespace Spectra.WebAPI.Areas.Public.Controllers
{
    public class ServiceController(ILogger<ServiceController> logger, ICurrentUser currentUser, IServiceMDService serviceMDService) : PublicControllerBase<ServiceController>(logger, currentUser)
    {
        private readonly IServiceMDService _serviceMDService = serviceMDService;


        [HttpGet("list")]
        public async Task<ActionResult> GetAllForListing([FromQuery] GetAllServiceForListingQuery input)
        {
            var masterDataServices = await _serviceMDService.GetAllForListing(input);

            return Ok(masterDataServices);
        }

        [HttpGet()]
        public async Task<ActionResult> GetById([FromQuery] GetServicesMDByIdQuery input)
        {
            var masterDataService = await _serviceMDService.GetServicesMById(input.Id);
            return Ok(masterDataService);
        }
    }
}
