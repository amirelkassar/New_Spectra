using System.Collections.Generic;
using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.ValueObjects
{
    public sealed class PhoneNumber : ValueObject
    {
        public string PhoneNumbers { get; set; }
        public string CountryCode { get; set; }

        protected override IEnumerable<object> GetEqualityComponents()
        {
            yield return PhoneNumbers;
            yield return CountryCode;
        }
    }
}
