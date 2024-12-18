using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.ServicesMD.Commands;
using Spectra.Application.MasterData.ServicesMD.Queries;
using Spectra.Application.MasterData.ServicesMD.Services;

namespace Spectra.WebAPI.Areas.Admin.MasterData
{
    public class ServiceController : AdminBaseController
    {
        private readonly IServiceMDService _serviceMDService;

        public ServiceController(IServiceMDService serviceMDService)
        {
            _serviceMDService = serviceMDService;
        }

        [HttpGet("list")]
        public async Task<ActionResult> GetAllMasterDataServices([FromQuery] GetAllServicesMDQuery input)
        {
            var masterDataServices = await _serviceMDService.GetAllServices(input);
            return Ok(masterDataServices);
        }

        [HttpGet("for-listing")]
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

        [HttpPost]
        public async Task<ActionResult> CreateMasterDataServicess([FromForm] CreateServicesMCommand input)
        {
            var masterDataService = await _serviceMDService.CreateServicesM(input);
            return Created("", masterDataService);
        }

        [HttpPut()]
        public async Task<ActionResult> UpdateMasterDataServices([FromForm] UpdateServicesMCommand input)
        {
            var masterDataService = await _serviceMDService.Updateservices(input);
            return Accepted("", masterDataService);
        }

        [HttpDelete()]
        public async Task<ActionResult> DeleteMasterDataServices([FromQuery] DeleteServicesMCommand input)
        {
            var masterDataService = await _serviceMDService.DeleteMedicalTestsAndXray(input.Id);
            return NoContent();
        }
    }



}

