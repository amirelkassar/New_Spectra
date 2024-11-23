using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Contracts.Services;
using Spectra.Domain.Shared.Constants.Permissions.Admin.Users;

namespace Spectra.WebAPI.Areas.Admin.Contract
{

    public class ContractController : AdminBaseController
    {
        private readonly IContractService _contractService;

        public ContractController(IContractService contractService)
        {
            _contractService = contractService;
        }
        //[HttpGet("list")]
        //[Authorize(AdminContractPermissions.ReadList)]
        //public async Task<ActionResult> GetListAsync([FromQuery] GetAllContractWithStatusQuery input)
        //{
        //    var contract = await _adminService.GetAllContractsOfEployees(input);
        //    return Ok(contract);
        //}

        //[HttpGet()]
        //[Authorize(AdminContractPermissions.ReadList)]
        //public async Task<ActionResult> GetAllCopiesOFContract([FromQuery] GetAllCopiesOFContractQuery input)
        //{
        //    var contract = await _contractService.GetAllCopiesOfContract(input);
        //    return Ok(contract);
        //}
        //[HttpPut("RefuesContract/id")]
        //[Authorize(AdminContractPermissions.Update)]
        //public async Task<ActionResult> UpdateRefuesContract(string id, UpdateContractStatusCommand input)
        //{

        //    var employees = await _adminService.UpdateContractStatus(id, input);
        //    return Ok(employees);
        //}
        //[HttpPut("MakeContractToEmployee/id")]
        //[Authorize(AdminContractPermissions.Create)]
        //public async Task<ActionResult> UpdateContractChangeOrAccpets(string id, UpdateContractToSendToEmployeeCommand input)
        //{

        //    input.ContractCase = ContractCases.BACkTOEMPlOYEE;
        //    var contract = await _adminService.UpdateContractFromAdmin(id, input);
        //    return Ok(contract);
        //}
    }
}
