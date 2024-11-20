using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.ServicesMD.Commands;
using Spectra.Application.MasterData.ServicesMD.Services;
using Spectra.Domain.Shared.Constants.Permissions.Admin.MasterDataPermissons;

namespace Spectra.WebAPI.Areas.Admin.MasterData.Controllers
{
    [Authorize]
    public class MasterDataServicesController : MasterDataController
    {
        private readonly IServiceMDService _serviceMDService;

        public MasterDataServicesController(IServiceMDService serviceMDService)
        {
            _serviceMDService = serviceMDService;
        }

        [HttpGet]
        [Authorize(AdminServicesPermissions.ReadList)]
        public async Task<ActionResult> GetAllMasterDataServices()
        {
            var masterDataServices = await _serviceMDService.GetAllServicesM();
            return Ok(masterDataServices);
        }

        [HttpGet("Name&&Terms")]
        [Authorize(AdminServicesPermissions.ReadList)]
        public async Task<ActionResult> GetAllNameAndTermsAndConditions()
        {
            var masterDataServices = await _serviceMDService.GetAllNameAndTermsAndConditions();
            return Ok(masterDataServices);
        }

        [HttpGet("id")]
        [Authorize(AdminServicesPermissions.ReadOne)]
        public async Task<ActionResult> GetOneMasterDataServices(string id)
        {
            var masterDataService = await _serviceMDService.GetServicesMById(id);
            return Ok(masterDataService);
        }

        [HttpPost]
        [Authorize(AdminServicesPermissions.Create)]
        public async Task<ActionResult> CreateMasterDataServicess([FromForm] CreateServicesMCommand input)
        {
            var masterDataService = await _serviceMDService.CreateServicesM(input);
            return Ok(masterDataService);
        }

        [HttpPut("id")]
        [Authorize(AdminServicesPermissions.Update)]
        public async Task<ActionResult> UpdateMasterDataServices(string id, [FromForm] UpdateServicesMCommand input)
        {
            var masterDataService = await _serviceMDService.Updateservices(id, input);
            return Ok(masterDataService);
        }

        [HttpDelete("id")]
        [Authorize(AdminServicesPermissions.Delete)]
        public async Task<ActionResult> DeleteMasterDataServices(string id)
        {
            var masterDataService = await _serviceMDService.DeleteMedicalTestsAndXray(id);
            return Ok(masterDataService);
        }
    }



}

