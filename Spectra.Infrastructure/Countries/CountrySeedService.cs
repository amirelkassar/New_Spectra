﻿using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Spectra.Application.Countries;
using Spectra.Application.Countries.SeedService;
using Spectra.Domain.Countries.States;
using Spectra.Domain.Countries;
using Spectra.Domain.Shared.OptionDtos;
using System.Net.Http.Json;
using Spectra.Application.Countries.States;
using Spectra.Application.Countries.Cities;


namespace Spectra.Infrastructure.Countries
{
    internal class CountrySeedService : ICountrySeedService
    {
        private readonly ILogger<CountrySeedService> _logger;
        private readonly HttpClient _httpClient;
        private readonly ICountryRepository _countryRepository;
        private readonly IStateRepository _stateRepository;
        private readonly ICityRepository _cityRepository;
        private readonly CountriesNow _countriesNowOptions;
        public CountrySeedService(ILogger<CountrySeedService> logger,
            HttpClient httpClient,
            ICountryRepository countryRepository,
            IStateRepository stateRepository,
            ICityRepository cityRepository,
            IOptions<CountriesNow> countriesNowOptions)
        {
            _logger = logger;
            _httpClient = httpClient;
            _countryRepository = countryRepository;
            _stateRepository = stateRepository;
            _cityRepository = cityRepository;
            _countriesNowOptions = countriesNowOptions.Value;
        }

        public async Task SeedCitiesAsync()
        {
            try
            {

            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error while seeding countries");
                throw;
            }
        }

        public async Task SeedCountriesAsync()
        {
            try
            {
                if (!await _countryRepository.AnyAsync())
                {
                    var httpResponse = await _httpClient
                                  .GetAsync(_countriesNowOptions.ApiBaseUrl + "countries/flag/images");
                    if (httpResponse.IsSuccessStatusCode)
                    {
                        var countriesData = await httpResponse.Content.ReadFromJsonAsync<CountryApiResponse>();
                        if (countriesData is not null && countriesData.Data is not null)
                        {
                            var countries = countriesData.Data.Select(c => new Country(c.Iso2)
                            {
                                EnName = c.Name,
                                ArName = "",
                                Flag = c.Flag,
                            }).ToArray();
                            await _countryRepository.AddManyAsync(countries);
                            _logger.LogInformation("Countries Seeded!");
                            return;
                        }
                    }
                    var stringContent = await httpResponse.Content.ReadAsStringAsync();
                    throw new Exception(stringContent);
                }
               
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error while seeding countries");

                throw;
            }           
        }

        public async Task SeedStatesAsync()
        {
            try
            {
                if (! await _stateRepository.AnyAsync())
                {
                    var httpResponse = await _httpClient
                       .GetAsync(_countriesNowOptions.ApiBaseUrl + "countries/states");

                    if (httpResponse.IsSuccessStatusCode) 
                    {
                        var statesData = await httpResponse.Content.ReadFromJsonAsync<StateApiResponse>();
                        if (statesData is not null && statesData.Data is not null)
                        {
                            var countries=await _countryRepository.GetAllAsync();
                            var countriesWithStates = statesData.Data;
                            foreach (var countryWithState in countriesWithStates) 
                            {
                                var targetCountry = countries.First(c => c.EnName.Equals(countryWithState.Name,StringComparison.OrdinalIgnoreCase));
                                await _stateRepository.AddManyAsync(countryWithState.States.Select(s => new State(s.state_code, targetCountry.Id)
                                {
                                    EnName = s.Name
                                }).ToArray());
                            }
                        }
                    }

                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error while seeding states");
                throw;
            }
        }
    }
}
