using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Spectra.Application.Countries;
using Spectra.Application.Countries.SeedService;
using Spectra.Domain.Countries.States;
using Spectra.Domain.Countries;
using Spectra.Domain.Shared.OptionDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.Countries
{
    internal class CountrySeedService : ICountrySeedService
    {
        private readonly ILogger<CountrySeedService> _logger;
        private readonly HttpClient _httpClient;
        private readonly ICountryRepository _countryRepository;
        private readonly CountriesNow _countriesNowOptions;
        public CountrySeedService(ILogger<CountrySeedService> logger,
            HttpClient httpClient,
            ICountryRepository countryRepository,
            IOptions<CountriesNow> countriesNowOptions)
        {
            _logger = logger;
            _httpClient = httpClient;
            _countryRepository = countryRepository;
            _countriesNowOptions = countriesNowOptions.Value;
        }
        public Task<IEnumerable<CityApiResponse>> FetchCityAsync(string stateId)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<CountryApiResponse>> FetchCountryAsync()
        {
            try
            {
                var httpResponse = await _httpClient
               .GetAsync(_countriesNowOptions.ApiBaseUrl + "countries/flag/images");
                if (httpResponse.IsSuccessStatusCode)
                {
                    var countriesData = await httpResponse.Content.ReadFromJsonAsync<CountryApiResponse>();
                    if (countriesData is not null && countriesData.Data is not null)
                    {
                        foreach (var countryData in countriesData.Data)
                        {
                            var country = new Country(countryData.Iso2)
                            {
                                EnName = countryData.Name,
                                ArName = "",
                                Flag = countryData.Flag,
                                States = states
                            };
                        }
                    }
                }
                var stringContent= await httpResponse.Content.ReadAsStringAsync();
                throw new Exception(stringContent);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error while seeding countries");
                throw;
            }           
        }

        public Task<IEnumerable<StateApiResponse>> FetchStatesAsync(string countryId)
        {
            throw new NotImplementedException();
        }
    }
}
