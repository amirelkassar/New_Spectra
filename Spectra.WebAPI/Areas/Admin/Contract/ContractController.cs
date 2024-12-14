using MediatR;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Contracts.Commands;
using Spectra.Application.Contracts.Queries;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Constants;
using Spectra.WebAPI.Areas.Admin.Contract.Models;

namespace Spectra.WebAPI.Areas.Admin.Contract
{

    public class ContractController : AdminBaseController
    {
        private readonly IMediator _mediator;
        private readonly ICurrentUser _currentUser;

        public ContractController(IMediator mediator,
            ICurrentUser currentUser)
        {
            _mediator = mediator;
            _currentUser = currentUser;
        }

        [HttpGet("list")]
        public async Task<ActionResult> GetListAsync([FromQuery] GetContractListQuery input)
        {
            var contract = await _mediator.Send(input);
            return Ok(contract);
        }

        [HttpGet()]
        public async Task<ActionResult> GetAsync([FromQuery] GetContractById input)
        {
            var contract = await _mediator.Send(input);
            return Ok(contract);
        }

        [HttpPost("cancel")]
        public async Task<ActionResult> CancelContractAsync([FromBody] ContractActionModel input)
        {
            var response = await _mediator.Send(new ChangeContractStateCommand
            {
                Id = input.Id,
                ModifierRole = Roles.SystemAdmin,
                CallerUserId = _currentUser.Id,
                CallerName = _currentUser.Name,
                Value = false,
                Reason = input.Reason,
                State = ContractConses.ContractStates.Canceled
            });

            return Accepted(response);
        }

        [HttpPost("reject")]
        public async Task<ActionResult> RejectContractAsync([FromBody] ContractActionModel input)
        {
            var response = await _mediator.Send(new ChangeContractStateCommand
            {
                Id = input.Id,
                ModifierRole = Roles.SystemAdmin,
                CallerUserId = _currentUser.Id,
                CallerName = _currentUser.Name,
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
                ModifierRole = Roles.SystemAdmin,
                CallerUserId = _currentUser.Id,
                CallerName = _currentUser.Name,
                Value = true,
                Reason = input.Reason,
                State = ContractConses.ContractStates.Accepted
            });

            return Accepted(response);
        }

        [HttpPut()]
        public async Task<ActionResult> UpdateAsync([FromBody] UpdateContractModel input)
        {

            var response = await _mediator.Send(new UpdateContractCommand
            {
                Id = input.Id,
                DaysOfWork = input.DaysOfWork,
                FreelancingServices = input.FreelancingServices,
                HoursOfWork = input.HoursOfWork,
                ModifierRole = Roles.SystemAdmin,
                SpectraTeamServices = input.SpectraTeamServices,
            });
            return Accepted("", response);
        }

        [HttpDelete()]
        public async Task<ActionResult> DeleteAsync([FromQuery] DeleteContractCommand input)
        {
            var response = await _mediator.Send(input);
            return NoContent();
        }
    }
}
