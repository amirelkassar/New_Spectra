using System;
using System.Runtime.Serialization;

namespace Spectra.Domain.Shared.Common.Exceptions
{
    [Serializable]
    public class InvalidRequestException : Exception
    {
        public InvalidRequestException(string message)
            : base(message)
        {
        }

        protected InvalidRequestException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }
    }
}
