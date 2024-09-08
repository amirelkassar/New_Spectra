using System;
using System.Runtime.Serialization;

namespace Spectra.Domain.Shared.Common.Exceptions
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
