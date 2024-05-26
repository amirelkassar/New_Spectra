using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Exceptions
{
	[Serializable]
	public class ThirdPartyErrorException : CleanArchitectureApplicationException
	{
		protected ThirdPartyErrorException(SerializationInfo info, StreamingContext context) : base(info, context)
		{
		}
		public ThirdPartyErrorException()
			: base()
		{
		}

		public ThirdPartyErrorException(string message)
			: base(message)
		{
		}

		public ThirdPartyErrorException(string message, Exception innerException)
			: base(message, innerException)
		{
		}
	}
}
