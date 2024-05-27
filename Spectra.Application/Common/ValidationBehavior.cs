using FluentValidation;
using MediatR;
using Spectra.Application.Exceptions;
using Spectra.Application.Messaging;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Spectra.Application.Common
{
	public class ValidationBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
		where TRequest : ICommandBase
	{
		private readonly IEnumerable<IValidator<TRequest>> _validators;

		public ValidationBehavior(IEnumerable<IValidator<TRequest>> validators)
		{
			_validators = validators;
		}

		public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
		{
			var context = new ValidationContext<TRequest>(request);

			var failures = _validators
				.Select(v => v.Validate(context))
				.SelectMany(result => result.Errors)
				.Where(f => f != null)
				.ToList();

			if (failures.Any())
			{
				throw new Exceptions.ValidationException(failures);
			}

			return await next();
		}
	}
}
