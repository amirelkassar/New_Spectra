using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Exceptions
{
	[Serializable]
	public class ValidationErrorException : CleanArchitectureApplicationException
	{
		protected ValidationErrorException(SerializationInfo info, StreamingContext context) : base(info, context)
		{
		}
		public ValidationErrorException()
			: base()
		{
		}

		public ValidationErrorException(string message)
			: base(message)
		{
		}

		public ValidationErrorException(string message, Exception innerException)
			: base(message, innerException)
		{
		}
	}
}
