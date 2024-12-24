using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.Articles.Commands;
using Spectra.Application.MasterData.Articles.Quries;

namespace Spectra.WebAPI.Areas.Admin.MasterData
{
    public class ArticleController(IMediator mediator) : AdminBaseController
    {
        private readonly IMediator _mediator = mediator;

        [HttpGet("list")]
        public async Task<IActionResult> GetListAsync([FromQuery] GetArtcileListQuery input)
        {
            var response = await _mediator.Send(input);
            return Ok(response);
        }

        [HttpPost()]
        public async Task<IActionResult> CreateAsync([FromForm] CreateArticleCommand input)
        {
            var response = await _mediator.Send(input);
            return Created("",response);
        }
    }
}
