using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.ValueObjects
{
    public class EmailAddress : ValueObject
    {
        public string Emailaddress { get; set; }

        protected override IEnumerable<object> GetEqualityComponents()
        {
            yield return Emailaddress;
        }
    }
}
