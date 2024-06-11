using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Clients
{
	public class SubClient : Client
	{
        public string ParentId { get; set; }
        public string ClientId { get; set; }
    }
}
