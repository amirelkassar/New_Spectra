using System;
using System.Runtime.Serialization;

namespace Spectra.Domain.Shared.Common.Exceptions
{
    [Serializable]
    public class ProcessingErrorException : CleanArchitectureApplicationException
    {
        protected ProcessingErrorException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
        public ProcessingErrorException()
            : base()
        {
        }

        public ProcessingErrorException(string message)
            : base(message)
        {
        }

        public ProcessingErrorException(string message, Exception innerException)
            : base(message, innerException)
        {
        }
    }
}
