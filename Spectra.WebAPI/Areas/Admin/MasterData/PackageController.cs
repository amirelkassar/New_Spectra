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
        [Authorize(AdminPackagePermissions.ReadOne)]
        public async Task<IActionResult> GetAsync([FromQuery] GetPackageByIdQuery input)
        {
            var response = await _mediator.Send(input);
            return response.SuccessOpration
                ? Ok(response)
                : BadRequest(response);
        }

        [HttpGet]
        [Route("list")]
        [Authorize(AdminPackagePermissions.ReadList)]
        public async Task<IActionResult> GetListAsync([FromQuery] GetPackageListQuery input)
        {
            var response = await _mediator.Send(input);
            return response.SuccessOpration
                ? Ok(response)
                : BadRequest(response);
        }

        [HttpPost]
        [Authorize(AdminPackagePermissions.Create)]
        public async Task<IActionResult> CreateAsync([FromForm] CreatePackageCommand input)
        {
            var response = await _mediator.Send(input);
            return response.SuccessOpration
                ? Created("", response)
                : BadRequest(response);
        }

        [HttpPut]
        [Authorize(AdminPackagePermissions.Update)]
        public async Task<IActionResult> UpdateAsync([FromForm] UpdatePackageCommand input)
        {
            var response = await _mediator.Send(input);
            return response.SuccessOpration
                ? Accepted("", response)
                : BadRequest(response);
        }

        [HttpDelete]
        [Authorize(AdminPackagePermissions.Delete)]
        public async Task<IActionResult> DeleteAsync([FromQuery] DeletePackageCommand input)
        {
            var response = await _mediator.Send(input);
            return response.SuccessOpration
                ? NoContent()
                : BadRequest(response);
        }
    }
}
