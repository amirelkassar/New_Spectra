using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Exceptions
{
	[Serializable]
	public class RequestErrorException : CleanArchitectureApplicationException
	{
		protected RequestErrorException(SerializationInfo info, StreamingContext context) : base(info, context)
		{
		}
		public RequestErrorException()
			: base()
		{
		}

		public RequestErrorException(string message)
			: base(message)
		{
		}

		public RequestErrorException(string message, Exception innerException)
			: base(message, innerException)
		{
		}
	}
}
