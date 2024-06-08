using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Entities.ValueObjects
{
	public class Name : ValueObject
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
