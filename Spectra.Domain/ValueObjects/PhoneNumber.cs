using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.ValueObjects
{
    public class PhoneNumber : ValueObject
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
