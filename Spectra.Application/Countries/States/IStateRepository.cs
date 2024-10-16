using Spectra.Domain.Countries.States;

namespace Spectra.Application.Countries.States
{
    public interface IStateRepository
    {
        Task<IEnumerable<State>> GetListAsync();
        Task<IEnumerable<State>> GetByCountryIdAsync(string countryId);
        Task<State> GetByIdAsync(string id);
        Task AddAsync(State state);
        Task AddManyAsync(params State[] states);
        Task<bool> ExistsAsync(string id);
        Task<bool> AnyAsync();
    }
}
