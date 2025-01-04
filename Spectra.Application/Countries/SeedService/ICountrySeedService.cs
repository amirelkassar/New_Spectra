namespace Spectra.Application.Countries.SeedService
{
    public interface ICountrySeedService
    {
        Task SeedCountriesAsync();
        Task SeedCitiesAsync();
        Task SeedStatesAsync();

    }
}
