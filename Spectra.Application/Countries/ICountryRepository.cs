using Spectra.Domain.Countries;
using Spectra.Domain.Countries.States;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Countries
{
    public interface ICountryRepository
    {
        Task<IEnumerable<Country>> GetAllAsync();
        Task<Country> GetByIdAsync(string id);
        Task<State> GetStateByIdAsync(string stateId);
        Task AddAsync(Country country);
        Task<bool> AnyCountriesAsync();
        Task<bool> ExistsAsync(string id);
    }
}
