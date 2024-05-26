using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Exceptions
{
	[Serializable]
	public class DbErrorException : CleanArchitectureApplicationException
	{
		protected DbErrorException(SerializationInfo info,StreamingContext context) : base(info, context)
		{
		}
		public DbErrorException()
			: base()
		{
		}

		public DbErrorException(string message)
			: base(message)
		{
		}

		public DbErrorException(string message, Exception innerException)
			: base(message, innerException)
		{
		}
	}
}
