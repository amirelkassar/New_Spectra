using System;
using System.Runtime.Serialization;

namespace Spectra.Domain.Shared.Common.Exceptions
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
