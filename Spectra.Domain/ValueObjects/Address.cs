using Spectra.Domain.Shared.Common;
using System.Collections.Generic;

namespace Spectra.Domain.ValueObjects
{
    public sealed class Address : ValueObject
    {
        public string Country { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string StreetName { get; set; }
        public string Building { get; set; }
        public string PostalCode { get; set; }
        public string? Floor { get; set; }
        public string? CommonMark { get; set; }

        protected override IEnumerable<object> GetEqualityComponents()
        {
            yield return Country;
            yield return City;
            yield return State;
            yield return StreetName;
            yield return Building;
            yield return PostalCode;
            yield return Floor;
            yield return CommonMark;
        }
    }
}
