using System.Collections.Generic;
using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.ValueObjects
{
    public sealed class EmailAddress : ValueObject
    {
        public string Emailaddress { get; set; }

        protected override IEnumerable<object> GetEqualityComponents()
        {
            yield return Emailaddress;
        }
    }
}
