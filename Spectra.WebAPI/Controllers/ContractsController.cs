using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Contracts.Commands;
using Spectra.Application.Contracts.Services;

namespace Spectra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //[Authorize(Roles = $"{Roles.SystemAdmin},{Roles.Doctor}")]
    public class ContractsController : ControllerBase
    {
        private readonly IContractService _contractService;

        public ContractsController(IContractService cotractService)
        {

            _contractService = cotractService;


        }
        //here we get all Contracts if it saved or made new copies from it
        [HttpGet("GetAllContractsCORS")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllCopiesOFContract([FromQuery] GetAllCopiesOFContractQuery input)
        {
            var contract = await _contractService.GetAllCopiesOfContract(input);
            return Ok(contract);
        }

        // this is Contract that User Can Choces this is Come From Services Master data and another 
        [HttpGet("ServicesFromMastrData")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllServicesOFMastrData()
        {
            var Contracties = await _contractService.GetAllContractData();
            return Ok(Contracties);

        }


        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneContract(string id)
        {
            var Contracties = await _contractService.GetContractById(id);
            return Ok(Contracties);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreateContractAndSend(CreateContractCommand input)
        {
            var Contracties = await _contractService.CreateContractSendORSave(input);
            return Ok(Contracties);
        }

        //[HttpPost("SaveContract")]
        //[AllowAnonymous]
        //public async Task<ActionResult> CreateContractAndSave(CreateContractCommand input )
        //{


        //    var Contracties = await _contractService.CreateContractSendORSave(input);
        //    return Ok(Contracties);
        //}

        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateContract(string id, UpdateAdminContractCommand input)
        {


            var Contract = await _contractService.UpdateContract(id, input);

            return Ok(Contract);
        }

        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteContract(string id)
        {
            var Contract = await _contractService.DeleteContract(id);
            return Ok(Contract);
        }
        [HttpPut("EmployeeAccpetContract/id")]
        [AllowAnonymous]
        public async Task<ActionResult> EmployeeAccpetContract(string id)
        {
            var Contract = await _contractService.EmployeeAccpetContract(id);
            return Ok(Contract);
        }

    }
}
