using Spectra.Application.Interfaces;
using Spectra.Domain.Entities;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using System.Collections.Generic;
using Spectra.Application.Interfaces.IRepository;
using Spectra.Infrastructure.Api;
using System.Linq;
using Microsoft.Extensions.Options;

namespace Spectra.Infrastructure.Services
{
	public class SeedService
	{
		private readonly ICountryRepository _countryRepository;
		private readonly IStateRepository _stateRepository;
		private readonly HttpClient _httpClient;

		public SeedService(
			ICountryRepository countryRepository,
			IStateRepository stateRepository,
			HttpClient httpClient)
		{
			_countryRepository = countryRepository;
			_stateRepository = stateRepository;
			_httpClient = httpClient;
		}

		public async Task SeedDataAsync()
		{
			await SeedCountriesAsync();
			await SeedStatesAsync();
		}

		private async Task SeedCountriesAsync()
		{
			var response = await _httpClient.GetAsync("https://countriesnow.space/api/v0.1/countries/flag/images");
			response.EnsureSuccessStatusCode();

			var jsonResponse = await response.Content.ReadAsStringAsync();
			var options = new JsonSerializerOptions
			{
				PropertyNameCaseInsensitive = true
			};
			var apiResponse = JsonSerializer.Deserialize<ApiResponse>(jsonResponse, options);

			if (apiResponse != null && apiResponse.Data != null)
			{
				foreach (var countryData in apiResponse.Data)
				{
					var country = new Country
					{
						Id = countryData.Iso2,
						EnName = countryData.Name,
						ArName = "",
						Flag = countryData.Flag
					};

					if (!await _countryRepository.ExistsAsync(country.Id))
					{
						await _countryRepository.AddAsync(country);
					}
				}
			}
		}

		public async Task SeedStatesAsync()
		{
			var response = await _httpClient.GetAsync("https://countriesnow.space/api/v0.1/countries/states");
			response.EnsureSuccessStatusCode();
			var jsonResponse = await response.Content.ReadAsStringAsync();

			var options = new JsonSerializerOptions
			{
				PropertyNameCaseInsensitive = true
			};
			var statesApiResponse = JsonSerializer.Deserialize<StatesApiResponse>(jsonResponse, options);

			if (statesApiResponse != null && statesApiResponse.Data != null)
			{
				foreach (var countryStates in statesApiResponse.Data)
				{
					var countryId = countryStates.Iso2;

					foreach (var stateData in countryStates.States)
					{
						var state = new State
						{
					
							Id = $"{countryId}-{stateData.state_code}", 
							CountryId = countryId,
							EnName = stateData.Name,
							ArName = ""
						};

						if (!await _stateRepository.ExistsAsync(state.Id))
						{
							await _stateRepository.AddAsync(state);
						}
					}
				}
			}
		}
	}
}
