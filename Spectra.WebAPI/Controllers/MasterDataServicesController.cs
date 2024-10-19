using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.ServicesMD.Commands;
using Spectra.Application.MasterData.ServicesMD.Services;


namespace Spectra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MasterDataServicesController : ControllerBase
    {
        private readonly IServiceMDService _serviceMDService;

        public MasterDataServicesController(IServiceMDService serviceMDService)
        {
            _serviceMDService = serviceMDService;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllMasterDataServices()
        {
            var MasterDataServicesies = await _serviceMDService.GetAllServicesM();
            return Ok(MasterDataServicesies);
        }

        [HttpGet("Name&&Terms")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllNameAndTermsAndConditions()
        {
            var MasterDataServicesies = await _serviceMDService.GetAllNameAndTermsAndConditions();
            return Ok(MasterDataServicesies);
        }

        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneMasterDataServices(string id)
        {
            var MasterDataServicesies = await _serviceMDService.GetServicesMById(id);
            return Ok(MasterDataServicesies);
        }
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreateMasterDataServicess([FromForm] CreateServicesMCommand input)
        {

            var MasterDataServicesies = await _serviceMDService.CreateServicesM(input);

            return Ok(MasterDataServicesies);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateMasterDataServices(string id, [FromForm] UpdateServicesMCommand input)
        {


            var MasterDataServicesies = await _serviceMDService.Updateservices(id, input);
            return Ok(MasterDataServicesies);
        }
        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteMasterDataServices(string id)
        {
            var MasterDataServicesies = await _serviceMDService.DeleteMedicalTestsAndXray(id);
            return Ok(MasterDataServicesies);
        }

    }



}

