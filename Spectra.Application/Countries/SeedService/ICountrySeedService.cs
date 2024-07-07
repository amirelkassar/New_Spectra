using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Countries.SeedService
{
    public interface ICountrySeedService
    {
        Task<IEnumerable<CountryApiResponse>> FetchCountryAsync();
        Task<IEnumerable<StateApiResponse>> FetchStatesAsync(string countryId);
        Task<IEnumerable<CityApiResponse>> FetchCityAsync(string stateId);

    }
}
