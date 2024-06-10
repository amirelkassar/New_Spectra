using Spectra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Interfaces.IRepository
{
    public interface IStateRepository
    {
		Task<IEnumerable<State>> GetByCountryIdAsync(string countryId);
		Task<State> GetByIdAsync(string id);
		Task AddAsync(State state);
		Task<bool> ExistsAsync(string id);
	}
}
