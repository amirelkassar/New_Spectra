using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Contracts.Commands;
using Spectra.Application.Contracts.Queries;
using Spectra.Application.Interfaces;
using Spectra.Domain.AppUser;
using Spectra.WebAPI.Areas.Admin.Contract.Models;
using Spectra.WebAPI.Areas.MedicalProvider;

namespace Spectra.WebAPI.Areas.Employee
{
    public class ContractController(IMediator mediator,
        ICurrentUser currentUser,
        UserManager<AppUser> userManager) : EmployeeControllerBase
    {
        private readonly IMediator _mediator = mediator;
        private readonly ICurrentUser _currentUser = currentUser;
        private readonly UserManager<AppUser> _userManager = userManager;

        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var response = await _mediator.Send(new GetContractByUserIdQuery { });
            return Ok(response);
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
                SpectraTeamServices = input.SpectraTeamServices,
                FreelancingDuration = input.FreelancingDuration,
                FreelancingPercentage = input.FreelancingPercentage,
                SpectraTeamDuration = input.SpectraTeamDuration,
                SpectraTeamPercentage = input.SpectraTeamPercentage
            });
            return Accepted("", response);
        }

        [HttpPost("cancel")]
        public async Task<ActionResult> CancelContractAsync([FromBody] ContractActionModel input)
        {
            var response = await _mediator.Send(new CancelContractCommand
            {
                Id = input.Id,
                Reason = input.Reason,
            });

            return Accepted(response);
        }

        [HttpPost("reject")]
        public async Task<ActionResult> RejectContractAsync([FromBody] ContractActionModel input)
        {
            var response = await _mediator.Send(new ChangeContractByEmployeeCommand
            {
                Value = false
            });

            return Accepted(response);
        }

        [HttpPost("accept")]
        public async Task<ActionResult> AcceptContractAsync([FromForm] ContractAcceptModel input)
        {
            var response = await _mediator.Send(new ChangeContractByEmployeeCommand
            {
                Signature = input.Signature,
                Value = true
            });

            return Accepted(response);
        }
    }
}
