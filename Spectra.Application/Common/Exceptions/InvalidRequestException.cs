using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Common.Exceptions
{
	[Serializable]
	public class InvalidRequestException : Exception
	{
		public InvalidRequestException(string message)
			: base(message)
		{
		}

		protected InvalidRequestException(SerializationInfo info, StreamingContext context)
			: base(info, context)
		{
		}
	}
}
