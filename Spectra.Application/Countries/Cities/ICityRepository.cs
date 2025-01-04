using Spectra.Domain.Countries.Cities;

namespace Spectra.Application.Countries.Cities
{
    public interface ICityRepository
    {
        Task<IEnumerable<City>> GetByStateIdAsync(string stateId);
        Task<City> GetByIdAsync(string id);
        Task AddAsync(City city);
        Task<bool> ExistsAsync(string id);
        Task AddManyAsync(params City[] states);
        Task<bool> AnyAsync();
    }
}
