using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Shared.OptionDtos
{
    public class CountriesNow
    {
        public string ApiBaseUrl { get; set; }
        public string ApiSecretKey { get; set; }
        public string ApiClientId { get; set; }
    }
}
