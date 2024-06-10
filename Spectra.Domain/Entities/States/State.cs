using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Entities.States
{
    public class State
    {
        public string Id { get; set; }
        public string CountryId { get; set; }
        public string EnName { get; set; }
        public string ArName { get; set; }
    }
}
