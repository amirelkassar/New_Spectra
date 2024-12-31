using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.Packages.Queries;
using Spectra.Domain.Shared.Common;

namespace Spectra.WebAPI.Areas.Public.Controllers
{
    public class PackageController(ILogger<PackageController> logger,
        ICurrentUser currentUser,
        ISender sender) : PublicControllerBase<PackageController>(logger, currentUser)
    {
        private readonly ISender _sender = sender;

        [HttpGet("list")]
        public async Task<IActionResult> GetListAsync([FromQuery] QueryPaginationParam input)
        {
            var response = await _sender.Send(new GetPackageListQuery
            {
                MaxCount = input.MaxCount,
                SkipCount = input.SkipCount,
            });
            return Ok(response);
        }

        [HttpGet()]
        public async Task<IActionResult> GetAsync([FromQuery] GetPackageByIdQuery input)
        {
            var response = await _sender.Send(input);
            return Ok(response);
        }
    }
}
