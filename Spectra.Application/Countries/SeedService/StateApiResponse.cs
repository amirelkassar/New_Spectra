using Spectra.Application.Countries.DTOs;

namespace Spectra.Application.Countries.SeedService
{
    public class StateApiResponse
    {
        public bool Error { get; set; }
        public string Msg { get; set; }
        public List<CountryStatesData> Data { get; set; }
    }
}
