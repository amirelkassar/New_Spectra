using Spectra.Domain.Entities.Countries;
using Spectra.Domain.Entities.States;
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
		Task<State> GetStateByIdAsync(string stateId);
		Task AddAsync(Country country);
		Task<bool> ExistsAsync(string id);
	}
}
