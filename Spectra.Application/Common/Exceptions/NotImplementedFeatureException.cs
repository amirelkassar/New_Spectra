using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Common.Exceptions
{
	[Serializable]
	public class NotImplementedFeatureException : Exception
	{
		public NotImplementedFeatureException(string featureName)
			: base($"The feature \"{featureName}\" is not implemented.")
		{
		}

		protected NotImplementedFeatureException(SerializationInfo info, StreamingContext context)
			: base(info, context)
		{
		}
	}
}
