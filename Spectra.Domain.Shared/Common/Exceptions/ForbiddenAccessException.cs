using System;
using System.Runtime.Serialization;

namespace Spectra.Domain.Shared.Common.Exceptions
{
    [Serializable]
    public class ForbiddenAccessException : Exception
    {
        public ForbiddenAccessException(string entityName, object key)
            : base($"Access to \"{entityName}\" with key \"{key}\" is forbidden.")
        {
        }

        protected ForbiddenAccessException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }
    }
}
