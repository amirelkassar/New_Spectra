using System;
using System.Runtime.Serialization;

namespace Spectra.Domain.Shared.Common.Exceptions
{
    [Serializable]
    public class DbErrorException : CleanArchitectureApplicationException
    {
        protected DbErrorException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
        public DbErrorException()
            : base()
        {
        }

        public DbErrorException(string message)
            : base(message)
        {
        }

        public DbErrorException(string message, Exception innerException)
            : base(message, innerException)
        {
        }
    }
}
