using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.Packages.Commands;
using Spectra.Application.MasterData.Packages.Queries;
using Spectra.Domain.Shared.Constants.Permissions.Admin.MasterDataPermissons;

namespace Spectra.WebAPI.Areas.Admin.MasterData
{
    public class PackageController(IMediator mediator) : AdminBaseController
    {
        private readonly IMediator _mediator = mediator;


        [HttpGet]
        public async Task<IActionResult> GetAsync([FromQuery] GetPackageByIdQuery input)
        {
            var response = await _mediator.Send(input);
            return response.SuccessOpration
                ? Ok(response)
                : BadRequest(response);
        }

        [HttpGet]
        [Route("list")]
        public async Task<IActionResult> GetListAsync([FromQuery] GetPackageListQuery input)
        {
            var response = await _mediator.Send(input);
            return response.SuccessOpration
                ? Ok(response)
                : BadRequest(response);
        }

        [HttpPost]
        public async Task<IActionResult> CreateAsync([FromForm] CreatePackageCommand input)
        {
            var response = await _mediator.Send(input);
            return response.SuccessOpration
                ? Created("", response)
                : BadRequest(response);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAsync([FromForm] UpdatePackageCommand input)
        {
            var response = await _mediator.Send(input);
            return response.SuccessOpration
                ? Accepted("", response)
                : BadRequest(response);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteAsync([FromQuery] DeletePackageCommand input)
        {
            var response = await _mediator.Send(input);
            return response.SuccessOpration
                ? NoContent()
                : BadRequest(response);
        }
    }
}
