using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.Articles.Quries;

namespace Spectra.WebAPI.Areas.Public.Controllers
{
    public class ArticleController : PublicControllerBase<ArticleController>
    {
        private readonly IMediator _mediator;

        public ArticleController(ILogger<ArticleController> logger, ICurrentUser currentUser,
            IMediator mediator) : base(logger, currentUser)
        {
            _mediator = mediator;
        }

        [HttpGet("list")]
        public async Task<IActionResult> GetListAsync([FromQuery] GetArtcileListQuery input)
        {
            var response = await _mediator.Send(input);
            return Ok(response);
        }
    }
}
