using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Exceptions
{
	[Serializable]
	public class NotFoundEntityException : CleanArchitectureApplicationException
	{
		protected NotFoundEntityException(SerializationInfo info, StreamingContext context) : base(info, context)
		{
		}
		public NotFoundEntityException()
			: base()
		{
		}

		public NotFoundEntityException(string message)
			: base(message)
		{
		}

		public NotFoundEntityException(string message, Exception innerException)
			: base(message, innerException)
		{
		}
	}
}
