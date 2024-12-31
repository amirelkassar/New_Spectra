using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.Contracts.Commands;
using Spectra.Application.Contracts.Queries;
using Spectra.Application.Interfaces;
using Spectra.WebAPI.Areas.Admin.Contract.Models;

namespace Spectra.WebAPI.Areas.EmployeeHead
{
    public class ContractController(ILogger<ContractController> logger, ICurrentUser currentUser,
        IMediator mediator) : EmployeeHeadControllerBase<ContractController>(logger, currentUser)
    {
        private readonly IMediator _mediator = mediator;

        [HttpGet("list")]
        public async Task<IActionResult> GetListAsync([FromQuery] GetEmployeeHeadContractListQuery input)
        {
            var response = await _mediator.Send(input);
            return Ok(response);
        }

        [HttpGet()]
        public async Task<IActionResult> GetAsync([FromQuery] GetEmployeeHeadContractByIdQuery input)
        {
            var response = await _mediator.Send(input);
            return Ok(response);
        }

        [HttpPost("reject")]
        public async Task<ActionResult> RejectContractAsync([FromBody] ContractActionModel input)
        {
            var response = await _mediator.Send(new ChangeContractByHeadCommand
            {
                Id = input.Id,
                Value = false,
            });

            return Accepted(response);
        }

        [HttpPost("accept")]
        public async Task<ActionResult> AcceptContractAsync([FromForm] ContractAcceptModel input)
        {
            var response = await _mediator.Send(new ChangeContractByHeadCommand
            {
                Id = input.Id,
                Value = true,
                Signature = input.Signature
            });

            return Accepted(response);
        }
    }
}
