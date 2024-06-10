using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Interfaces;
using Spectra.Application.Interfaces.IRepository;
using Spectra.Domain.Entities;
using Spectra.Infrastructure.Repositories;
using Spectra.Infrastructure.Services;
using System.Threading.Tasks;

namespace Spectra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CountryController : ControllerBase
    {
		private readonly ICountryRepository _countryRepository;
		private readonly IStateRepository _stateRepository;

		public CountryController(ICountryRepository countryRepository , IStateRepository stateRepository)
		{
			_countryRepository = countryRepository;
			_stateRepository = stateRepository;
		}


		[HttpGet]
		[AllowAnonymous]
		public async Task<ActionResult<IEnumerable<Country>>> GetAllCountries()
		{
			var countries = await _countryRepository.GetAllAsync();
			return Ok(countries);
		}

		[HttpGet("{countryId}/states")]
		[AllowAnonymous]
		public async Task<ActionResult<IEnumerable<State>>> GetStatesByCountryId(string countryId)
		{
			var states = await _stateRepository.GetByCountryIdAsync(countryId);
			return Ok(states);
		}
	}
}
