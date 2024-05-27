using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Common.Exceptions
{
	[Serializable]
	public class NoDefaultValueException : Exception
	{
		public NoDefaultValueException(string entityName, string propertyName)
			: base($"No default value found for property \"{propertyName}\" on entity \"{entityName}\".")
		{
		}

		protected NoDefaultValueException(SerializationInfo info, StreamingContext context)
			: base(info, context)
		{
		}
	}
}
