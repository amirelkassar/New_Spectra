using MediatR;
using Spectra.Application.Exceptions;
using Spectra.Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Common
{
	public class AuthorizationBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse?>
			where TRequest : notnull
	{
		private readonly IAuthorizer<TRequest> _authorizer;

		public AuthorizationBehavior(IAuthorizer<TRequest> authorizer)
		{
			_authorizer = authorizer;
		}
	

		public async Task<TResponse?> Handle(TRequest request, RequestHandlerDelegate<TResponse?> next, CancellationToken cancellationToken)
		{
			var authorizationResult = await _authorizer.AuthorizeAsync(request, cancellationToken);
			if (!authorizationResult.IsAuthorized)
			{
				throw new UnauthorizedException(authorizationResult.FailureMessage ?? "Unauthorized");
			}

			return await next();
		}
	}
}
