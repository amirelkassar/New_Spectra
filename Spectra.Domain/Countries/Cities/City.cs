using Spectra.Domain.Shared.Common;
using System;

namespace Spectra.Domain.Countries.Cities
{
    public class City : BaseEntity<string>
    {
        public City(string id, string stateId) : base(id)
        {
            ArgumentNullException.ThrowIfNull(nameof(stateId));
            StateId = stateId;
        }
        public string StateId { get; private set; }
        public string EnName { get; set; }
        public string ArName { get; set; }
    }
}
