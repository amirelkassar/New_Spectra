using System;
using System.Runtime.Serialization;

namespace Spectra.Domain.Shared.Common.Exceptions
{
    [Serializable]
    public class RequestErrorException : CleanArchitectureApplicationException
    {
        protected RequestErrorException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
        public RequestErrorException()
            : base()
        {
        }

        public RequestErrorException(string message)
            : base(message)
        {
        }

        public RequestErrorException(string message, Exception innerException)
            : base(message, innerException)
        {
        }
    }
}
