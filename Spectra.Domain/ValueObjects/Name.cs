using System.Collections.Generic;
using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.ValueObjects
{
    public sealed class Name : ValueObject
    {
        public string FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Prefix { get; set; }


        protected override IEnumerable<object> GetEqualityComponents()
        {
            yield return FirstName;
            yield return LastName;
            yield return Prefix;
        }
    }
}
