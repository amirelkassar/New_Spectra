using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.Countries
{
    public class Country(string id) : BaseEntity<string>(id)
    {
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string Flag { get; set; }
    }
}
