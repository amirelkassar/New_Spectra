using Spectra.Domain.Shared.Common;
using System;

namespace Spectra.Domain.Countries.States
{
    public class State : BaseEntity<string>
    {
        public State(string id, string? stateCode, string countryId, string country) : base(id)
        {
            ArgumentNullException.ThrowIfNull(countryId);
            ArgumentNullException.ThrowIfNull(country);
            CountryId = countryId;
            StateCode = stateCode;
            Country = country;
        }
        public string? StateCode { get; private set; }
        public string CountryId { get; private set; }
        public string Country { get; private set; }
        public string EnName { get; set; }
        public string ArName { get; set; }

    }
}
