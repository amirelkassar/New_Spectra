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
        public State(string id,string countryId) : base(id)
        {
            ArgumentNullException.ThrowIfNull(countryId);
            CountryId = countryId;
            Cities = new HashSet<City>();
        }
        public string CountryId { get;}
        public string EnName { get; set; }
        public string ArName { get; set; }
        public ICollection<City> Cities { get; set; }

    }
}
