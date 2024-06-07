using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Common.Models
{
	public class AppConfig
	{
		public IdentityServerConfig IdentityServerConfig { get; set; }
	}

	public class IdentityServerConfig
	{
		public string IssuerUri { get; set; }
	}
}
