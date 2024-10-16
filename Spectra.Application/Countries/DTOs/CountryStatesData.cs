using Spectra.Application.Countries.States.DTOs;

namespace Spectra.Application.Countries.DTOs
{
    public class CountryStatesData
    {
        public string Name { get; set; }
        public string Iso3 { get; set; }
        public string Iso2 { get; set; }
        public List<StateData> States { get; set; }
    }
}
