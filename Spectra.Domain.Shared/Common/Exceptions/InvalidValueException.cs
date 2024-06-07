using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Shared.Common.Exceptions
{
	[Serializable]
    public class InvalidValueException : Exception
    {
        public InvalidValueException(string entityName, string propertyName, object value)
            : base($"Invalid value \"{value}\" for property \"{propertyName}\" on entity \"{entityName}\".")
        {
        }

        protected InvalidValueException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }
    }
}
