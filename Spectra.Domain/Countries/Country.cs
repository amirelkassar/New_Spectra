using Spectra.Domain.Countries.States;
using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Countries
{
    public class Country(string id) : BaseEntity<string>(id)
    {
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string Flag { get; set; }
    }
}
