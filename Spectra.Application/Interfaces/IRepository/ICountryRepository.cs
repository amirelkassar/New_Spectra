using Spectra.Domain.Entities.Countries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Interfaces.IRepository
{
    public interface ICountryRepository
    {
		Task<IEnumerable<Country>> GetAllAsync();
		Task<Country> GetByIdAsync(string id);
		Task AddAsync(Country country);
		Task<bool> ExistsAsync(string id);
	}
}
