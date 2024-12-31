using MediatR;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Contracts.Commands;
using Spectra.Application.Contracts.Queries;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Constants;
using Spectra.WebAPI.Areas.Admin.Contract.Models;

namespace Spectra.WebAPI.Areas.Admin.Contract
{

    public class ContractController(IMediator mediator,
        ICurrentUser currentUser) : AdminBaseController
    {
        [HttpGet("list")]
        public async Task<ActionResult> GetListAsync([FromQuery] GetContractListQuery input)
        {
            var contract = await mediator.Send(input);
            return Ok(contract);
        }

        [HttpGet()]
        public async Task<ActionResult> GetAsync([FromQuery] GetContractById input)
        {
            var contract = await mediator.Send(input);
            return Ok(contract);
        }

        [HttpGet("text")]
        public async Task<IActionResult> GetTextSection([FromQuery] GetContractTextQuery input)
        {
            var contract = await mediator.Send(input);
            return Ok(contract);
        }

        [HttpPost("cancel")]
        public async Task<ActionResult> CancelContractAsync([FromBody] CancelContractCommand input)
        {
            var response = await mediator.Send(input);

            return Accepted(response);
        }

        [HttpPost("reject")]
        public async Task<ActionResult> RejectContractAsync([FromBody] ContractActionModel input)
        {
            var response = await mediator.Send(new ChangeContractByAdminCommand
            {
                Id = input.Id,
                Value = false,
            });
            return Accepted(response);
        }

        [HttpPost("accept")]
        public async Task<ActionResult> AcceptContractAsync([FromForm] AdminContractAcceptModel input)
        {
            var response = await mediator.Send(new ChangeContractByAdminCommand
            {
                Id = input.Id,
                Value = true,
                Signature = input.Signature,
                TextSections = input.TextSections
            });

            return Accepted(response);
        }

        [HttpPut()]
        public async Task<ActionResult> UpdateAsync([FromBody] UpdateContractModel input)
        {

            var response = await mediator.Send(new UpdateContractCommand
            {
                Id = input.Id,
                DaysOfWork = input.DaysOfWork,
                FreelancingServices = input.FreelancingServices,
                HoursOfWork = input.HoursOfWork,
                ModifierRole = Roles.SystemAdmin,
                SpectraTeamServices = input.SpectraTeamServices,
                FreelancingDuration = input.FreelancingDuration,
                FreelancingPercentage = input.FreelancingPercentage,
                SpectraTeamDuration = input.SpectraTeamDuration,
                SpectraTeamPercentage = input.SpectraTeamPercentage

            });
            return Accepted("", response);
        }

        [HttpDelete()]
        public async Task<ActionResult> DeleteAsync([FromQuery] DeleteContractCommand input)
        {
            var response = await mediator.Send(input);
            return NoContent();
        }
    }
}
