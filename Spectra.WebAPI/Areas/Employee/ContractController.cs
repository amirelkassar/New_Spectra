using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Contracts.Commands;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Constants.Permissions.Admin.Users;
using Spectra.WebAPI.Areas.Admin.Contract.Models;
using Spectra.WebAPI.Areas.MedicalProvider;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.WebAPI.Areas.Employee
{
    public class ContractController(IMediator mediator, ICurrentUser currentUser) : EmployeeControllerBase
    {
        private readonly IMediator _mediator = mediator;
        private readonly ICurrentUser _currentUser = currentUser;

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateAsync([FromBody] CreateContractCommand input)
        {
            var response = await _mediator.Send(input);
            return Created("", response);
        }

        [HttpPut]
        [Authorize]
        public async Task<IActionResult> UpdateAsync([FromBody] UpdateContractModel input)
        {
            var response = await _mediator.Send(new UpdateContractCommand
            {
                DaysOfWork = input.DaysOfWork,
                EmployeeUserId=_currentUser.Id,
                Id = input.Id,
                FreelancingServices = input.FreelancingServices,
                HoursOfWork = input.HoursOfWork,
                ModifierRole=_currentUser.Role,
                SpectraTeamServices = input.SpectraTeamServices
            });
            return Accepted("", response);
        }

        [HttpPost("cancel")]
        [Authorize]
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
        [Authorize]
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
        [Authorize]
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
                State= ContractConses.ContractStates.Contracting
            });

            return Accepted(response);
        }
    }
}
