using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Interfaces;
using Spectra.Application.Templates.Service;
using Spectra.Application.Templates.Models;
using MediatR;
using Spectra.Application.Contracts.Queries;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly ISnomedService _snomedService;
        private readonly ISender _sender;

        public HomeController(ISnomedService snomedService,ISender sender)
        {
            _snomedService = snomedService;
            _sender = sender;
        }

        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            return Ok(await _snomedService.GetAll("speech"));
        }
        [HttpGet("template")]
        public async Task<IActionResult> GetContractTemplate([FromQuery] string contractId)
        {

            var response = (OperationResult<byte[]>) await _sender.Send(new GetContractTemplateQuery {ContractId= contractId });
            return File(response.Data, "Application/Pdf", "test.pdf");
        }
    }
}
