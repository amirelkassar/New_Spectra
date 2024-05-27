using Spectra.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Spectra.Application.Interfaces
{
	public interface IAuthorizer<T>
	{
		Task<AuthorizationResult> AuthorizeAsync(T instance, CancellationToken cancellation = default);
	}
}
