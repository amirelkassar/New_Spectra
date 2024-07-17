using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Domain.Countries.Cities;
using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.Countries.States
{
    public class State : BaseEntity<string>
    {
        public State(string id, string? stateCode, string countryId) : base(id)
        {
            ArgumentNullException.ThrowIfNull(countryId);
            CountryId = countryId;
            StateCode = stateCode;
        }
        public string? StateCode { get; private set; }
        public string CountryId { get; private set; }
        public string EnName { get; set; }
        public string ArName { get; set; }

    }
}
