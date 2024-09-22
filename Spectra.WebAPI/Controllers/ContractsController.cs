using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Contracts.Commands;
using Spectra.Application.Contracts.Services;

namespace Spectra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContractsController: ControllerBase
    {
        private readonly IContractService _contractService;

        public ContractsController(IContractService cotractService)
        {

            _contractService = cotractService;


        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllContracts()
        {
            var Contracties = await _contractService.GetAllContracts();
            return Ok(Contracties);
        }



        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneContract(string id)
        {
            var Contracties = await _contractService.GetContractById(id);
            return Ok(Contracties);
        }
        [HttpPost("SendContract")]
        [AllowAnonymous]
        public async Task<ActionResult> CreateContractAndSend(CreateContractCommand input)
        {


            var Contracties = await _contractService.CreateContractSendORSave(input, true);
            return Ok(Contracties);
        }
        [HttpPost("SaveContract")]
        [AllowAnonymous]
        public async Task<ActionResult> CreateContractAndSave(CreateContractCommand input )
        {


            var Contracties = await _contractService.CreateContractSendORSave(input, false);
            return Ok(Contracties);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateContract(string id, UpdateContractCommand input)
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

    }
}
