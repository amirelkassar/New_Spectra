using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Exceptions
{
	internal class UnauthorizedException : CleanArchitectureApplicationException
	{
		public UnauthorizedException(string message)
			: base(message)
		{
		}
	}
}
