using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Countries;
using Spectra.Application.Countries.DTOs;
using Spectra.Application.Countries.States.DTOs;
using Spectra.Application.Countries.States.Queries;
using Spectra.Application.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Spectra.WebAPI.Controllers
{
    [ApiController]
	[Route("api/[controller]")]
	public class CountryController : ControllerBase
	{
		private readonly ICountryService _countryService;

		public CountryController(ICountryService countryService)
		{
			_countryService = countryService;
		}

		[HttpGet]
		[AllowAnonymous]
		public async Task<ActionResult<IEnumerable<CountryData>>> GetAllCountries()
		{
			var countries = await _countryService.GetAllCountriesAsync();
			return Ok(countries);
		}

		[HttpGet("{countryId}/states")]
		[AllowAnonymous]
		public async Task<ActionResult<IEnumerable<StateData>>> GetStatesByCountryId(string countryId)
		{
			var states = await _countryService.GetStatesByCountryIdAsync(countryId);
			return Ok(states);
		}

		[HttpGet]
		[Route("states/{stateId}/cities")]
		[AllowAnonymous]
		public async Task<IActionResult> GetCitiesByStateId(string stateId)
		{
			var cities = await _countryService.GetCitiesByStateIdAsync(stateId);
			return Ok(cities);
		}
	}
}
