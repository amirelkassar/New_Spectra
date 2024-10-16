using Spectra.Application.Countries.DTOs;

namespace Spectra.Application.Countries.SeedService
{
    public class CountryApiResponse
    {
        public bool Error { get; set; }
        public string Msg { get; set; }
        public List<CountryData> Data { get; set; }
    }
}
