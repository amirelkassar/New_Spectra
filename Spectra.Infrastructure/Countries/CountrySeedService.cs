using Microsoft.Extensions.Logging;
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
        public Task SeedCitiesAsync(string stateId)
        {
            throw new NotImplementedException();
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

        public async Task SeedStatesAsync(string countryId)
        {
            throw new NotImplementedException();
        }

        public async Task SeedStatesAsync()
        {
            try
            {
                if (! await _stateRepository.any)
                {

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
