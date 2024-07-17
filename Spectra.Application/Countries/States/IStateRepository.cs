using Spectra.Domain.Countries.States;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Countries.States
{
    public interface IStateRepository
    {
        Task<IEnumerable<State>> GetByCountryIdAsync(string countryId);
        Task<State> GetByIdAsync(string id);
        Task AddAsync(State state);
        Task AddManyAsync(params State[] states);
        Task<bool> ExistsAsync(string id);
    }
}
