using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Contracts.Commands;
using Spectra.Application.Contracts.Queries;
using Spectra.Application.Identities.Permissions.Users;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Constants;
using Spectra.WebAPI.Areas.Admin.Contract.Models;
using Spectra.WebAPI.Areas.MedicalProvider;

namespace Spectra.WebAPI.Areas.Employee
{
    public class ContractController(IMediator mediator, ICurrentUser currentUser) : EmployeeControllerBase
    {
        private readonly IMediator _mediator = mediator;
        private readonly ICurrentUser _currentUser = currentUser;


        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var response = await _mediator.Send(new GetContractByUserIdQuery { });
            return response.SuccessOpration
                ? Ok(response)
                : BadRequest(response);
        }

        [HttpPost]
        public async Task<IActionResult> CreateAsync([FromBody] CreateContractCommand input)
        {
            var response = await _mediator.Send(input);
            return Created("", response);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAsync([FromBody] UpdateContractModel input)
        {
            var response = await _mediator.Send(new UpdateContractCommand
            {
                Id = input.Id,
                DaysOfWork = input.DaysOfWork,
                EmployeeUserId = _currentUser.Id,
                FreelancingServices = input.FreelancingServices,
                HoursOfWork = input.HoursOfWork,
                ModifierRole = _currentUser.Role,
                SpectraTeamServices = input.SpectraTeamServices
            });
            return Accepted("", response);
        }

        [HttpPost("cancel")]
        public async Task<ActionResult> CancelContractAsync([FromBody] ContractActionModel input)
        {
            var response = await _mediator.Send(new ChangeContractStateCommand
            {
                Id = input.Id,
                ModifierRole = _currentUser.Role,
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
                ModifierRole = _currentUser.Role,
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
                ModifierRole = _currentUser.Role,
                CallerUserId = _currentUser.Id,
                CallerName = _currentUser.Name,
                Value = true,
                Reason = input.Reason,
                State = ContractConses.ContractStates.Contracting
            });

            return Accepted(response);
        }
    }
}
