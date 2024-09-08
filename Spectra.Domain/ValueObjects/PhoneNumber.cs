using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;

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
