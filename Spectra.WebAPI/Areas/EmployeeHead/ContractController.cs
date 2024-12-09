using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.Contracts.Commands;
using Spectra.Application.Contracts.Queries;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Constants;
using Spectra.WebAPI.Areas.Admin.Contract.Models;

namespace Spectra.WebAPI.Areas.EmployeeHead
{
    public class ContractController(ILogger<ContractController> logger, ICurrentUser currentUser,
        IMediator mediator) : EmployeeHeadControllerBase<ContractController>(logger, currentUser)
    {
        private readonly IMediator _mediator = mediator;

        [HttpGet("list")]
        public async Task<IActionResult> GetListAsync([FromQuery] GetHeadDoctorContractListQuery input)
        {
            var response = await _mediator.Send(input);
            return Ok(response);
        }

        [HttpPost("reject")]
        public async Task<ActionResult> RejectContractAsync([FromBody] ContractActionModel input)
        {
            var response = await _mediator.Send(new ChangeContractStateCommand
            {
                Id = input.Id,
                ModifierRole = CurrentUser.Role,
                CallerUserId = CurrentUser.Id,
                CallerName = CurrentUser.Name,
                Value = false,
                Reason = input.Reason,
                State = ContractConses.ContractStates.Contracting
            });

            return Accepted(response);
        }

        [HttpPost("accept")]
        public async Task<ActionResult> AcceptContractAsync([FromBody] ContractActionModel input)
        {
            var response = await _mediator.Send(new ChangeContractStateCommand
            {
                Id = input.Id,
                ModifierRole = CurrentUser.Role,
                CallerUserId = CurrentUser.Id,
                CallerName = CurrentUser.Name,
                Value = true,
                Reason = input.Reason,
                State = ContractConses.ContractStates.Contracting
            });

            return Accepted(response);
        }
    }
}
