using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Countries.DTOs;
using Spectra.Application.Countries.Queries;
using Spectra.Application.Interfaces;
using Spectra.Application.Interfaces.IRepository;
using Spectra.Application.States.DTOs;
using Spectra.Application.States.Queries;
using Spectra.Domain.Entities.Countries;
using Spectra.Domain.Entities.States;
using Spectra.Infrastructure.Repositories;
using Spectra.Infrastructure.Services;
using System.Threading.Tasks;

namespace Spectra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CountryController : ControllerBase
    {
		private readonly IMediator _mediator;

		public CountryController(IMediator mediator)
		{
			_mediator = mediator;
		}

		[HttpGet]
		[AllowAnonymous]
		public async Task<ActionResult<IEnumerable<CountryData>>> GetAllCountries()
		{
			var query = new GetAllCountriesQuery();
			var countries = await _mediator.Send(query);
			return Ok(countries);
		}


		[HttpGet("{countryId}/states")]
		[AllowAnonymous]
		public async Task<ActionResult<IEnumerable<StateData>>> GetStatesByCountryId(string countryId)
		{
			var query = new GetStatesByCountryIdQuery { CountryId = countryId };
			var states = await _mediator.Send(query);
			return Ok(states);
		}
	}
}
