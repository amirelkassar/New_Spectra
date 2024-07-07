using Spectra.Domain.Countries;
using Spectra.Domain.Countries.States;

namespace Spectra.Application.Countries
{
    public interface ICountryRepository
    {
        Task<IEnumerable<Country>> GetAllAsync();
        Task<Country> GetByIdAsync(string id);
        Task AddAsync(Country country);
        Task AddManyAsync(params Country[] countries);
        Task<bool> AnyAsync();
        Task<bool> ExistsAsync(string id);
        Task DeleteAsync(string id);
    }
}
