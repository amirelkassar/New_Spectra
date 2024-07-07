using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Spectra.Domain.Countries.Cities;
using Spectra.Domain.Countries.States;
using Spectra.Domain.Countries;
using Spectra.Application.Countries;
using Spectra.Application.Countries.SeedService;

namespace Spectra.Infrastructure.Services
{
    public class SeedService
	{
		private readonly ICountryRepository _countryRepository;
		private readonly HttpClient _httpClient;
		private readonly ILogger<SeedService> _logger;

		public SeedService(ICountryRepository countryRepository,
			HttpClient httpClient,
			ILogger<SeedService> logger)
		{
			_countryRepository = countryRepository;
			_httpClient = httpClient;
			_logger = logger;
		}

		public async Task SeedDataAsync()
		{
			// Check if the countries collection is already seeded
			if (await _countryRepository.AnyCountriesAsync())
			{
				_logger.LogInformation("The countries collection is already seeded.");
				return;
			}

			await SeedCountriesAsync();
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
			var apiResponse = JsonSerializer.Deserialize<CountryApiResponse>(jsonResponse, options);

			if (apiResponse != null && apiResponse.Data != null)
			{
				foreach (var countryData in apiResponse.Data)
				{
					var states = await FetchStatesForCountryAsync(countryData.Name); // Use country name for fetching states
					var country = new Country(countryData.Iso2)
					{
						EnName = countryData.Name,
						ArName = "",
						Flag = countryData.Flag,
						States = states
					};

					if (!await _countryRepository.ExistsAsync(country.Id))
					{
						await _countryRepository.AddAsync(country);
					}
				}
			}
		}

		private async Task<List<State>> FetchStatesForCountryAsync(string countryName)
		{
			var response = await _httpClient.GetAsync("https://countriesnow.space/api/v0.1/countries/states");
			response.EnsureSuccessStatusCode();
			var jsonResponse = await response.Content.ReadAsStringAsync();

			var options = new JsonSerializerOptions
			{
				PropertyNameCaseInsensitive = true
			};
			var statesApiResponse = JsonSerializer.Deserialize<StateApiResponse>(jsonResponse, options);

			var states = new List<State>();
			if (statesApiResponse != null && statesApiResponse.Data != null)
			{
				foreach (var countryStates in statesApiResponse.Data)
				{
					if (countryStates.Name == countryName)
					{
						foreach (var stateData in countryStates.States)
						{
							var cities = await FetchCitiesForStateAsync(countryName, stateData.Name);

							var state = new State(stateData.Name, countryStates.Iso2)
							{
								EnName = stateData.Name,
								ArName = "",
								Cities = cities
							};
							states.Add(state);
						}
					}
				}
			}

			return states;
		}

		private async Task<List<City>> FetchCitiesForStateAsync(string country, string state)
		{
			var cities = new List<City>();

			var requestData = new { country, state };
			var content = new StringContent(JsonSerializer.Serialize(requestData), Encoding.UTF8, "application/json");

			var response = await _httpClient.PostAsync("https://countriesnow.space/api/v0.1/countries/state/cities", content);

			// Log the request details for debugging
			_logger.LogInformation($"Fetching cities for country: {country}, state: {state}");

			if (!response.IsSuccessStatusCode)
			{
				// Log error details for debugging
				var errorMessage = await response.Content.ReadAsStringAsync();
				_logger.LogError($"Error fetching cities for country: {country}, state: {state}. Response: {response.StatusCode}, {errorMessage}");
				return cities; // Return an empty list if the state is not found
			}

			var jsonResponse = await response.Content.ReadAsStringAsync();

			var options = new JsonSerializerOptions
			{
				PropertyNameCaseInsensitive = true
			};
			var citiesApiResponse = JsonSerializer.Deserialize<CityApiResponse>(jsonResponse, options);

			if (citiesApiResponse != null && citiesApiResponse.Data != null)
			{
				foreach (var cityName in citiesApiResponse.Data)
				{
					var city = new City(cityName, state)
					{
						EnName = cityName,
						ArName = ""
					};

					cities.Add(city);
				}
			}

			return cities;
		}
	}
}
