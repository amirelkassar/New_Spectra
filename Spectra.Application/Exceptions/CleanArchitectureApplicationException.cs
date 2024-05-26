using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Exceptions
{
	[Serializable]
	public class CleanArchitectureApplicationException :Exception
	{
		protected CleanArchitectureApplicationException(SerializationInfo info,StreamingContext context) : base(info, context)
		{
		}
		public CleanArchitectureApplicationException() : base() { }

		public CleanArchitectureApplicationException(string message)
		   : base(message)
		{
		}

		public CleanArchitectureApplicationException(string message, Exception innerException)
			: base(message, innerException)
		{
		}
	}
}
