using Spectra.Domain.Entities.Cities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Interfaces.IRepository
{
    public interface ICityRepository
    {
		Task<IEnumerable<City>> GetByStateIdAsync(string stateId);
		Task<City> GetByIdAsync(string id);
		Task AddAsync(City city);
		Task<bool> ExistsAsync(string id);
	}
}
