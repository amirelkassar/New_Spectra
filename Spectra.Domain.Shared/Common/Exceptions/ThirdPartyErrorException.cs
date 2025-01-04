using System;
using System.Runtime.Serialization;

namespace Spectra.Domain.Shared.Common.Exceptions
{
    [Serializable]
    public class ThirdPartyErrorException : CleanArchitectureApplicationException
    {
        protected ThirdPartyErrorException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
        public ThirdPartyErrorException()
            : base()
        {
        }

        public ThirdPartyErrorException(string message)
            : base(message)
        {
        }

        public ThirdPartyErrorException(string message, Exception innerException)
            : base(message, innerException)
        {
        }
    }
}
