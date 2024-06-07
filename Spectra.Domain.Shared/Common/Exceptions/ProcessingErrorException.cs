using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Shared.Common.Exceptions
{
	[Serializable]
	public class ProcessingErrorException : CleanArchitectureApplicationException
	{
		protected ProcessingErrorException(SerializationInfo info, StreamingContext context) : base(info, context)
		{
		}
		public ProcessingErrorException()
			: base()
		{
		}

		public ProcessingErrorException(string message)
			: base(message)
		{
		}

		public ProcessingErrorException(string message, Exception innerException)
			: base(message, innerException)
		{
		}
	}
}
