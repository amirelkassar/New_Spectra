using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Countries.SeedService
{
    public interface ICountrySeedService
    {
        Task SeedCountriesAsync();
        Task SeedStatesAsync(string countryId);
        Task SeedCitiesAsync(string stateId);

    }
}
