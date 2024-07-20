using Spectra.Application.Countries.Cities.DTOs;
using Spectra.Application.Countries.DTOs;
using Spectra.Application.Countries.States.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Countries
{
    public interface ICountryService
    {
        Task<IEnumerable<CountryData>> GetAllCountriesAsync();
        Task<IEnumerable<StateData>> GetStatesByCountryIdAsync(string countryId);
        Task<IEnumerable<CityData>> GetCitiesByStateIdAsync(string stateId);
    }
}
