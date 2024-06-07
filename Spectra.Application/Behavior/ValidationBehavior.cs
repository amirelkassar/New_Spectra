using FluentValidation;
using MediatR;
using Microsoft.Extensions.Logging;
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
        private readonly ILogger _logger;

        public ValidationBehavior(IEnumerable<IValidator<TRequest>> validators,
			ILogger logger)
		{
			_validators = validators;
            _logger = logger;
        }

		public async Task<TResponse> Handle(TRequest request,
			RequestHandlerDelegate<TResponse> next,
			CancellationToken cancellationToken)
		{
			var context = new ValidationContext<TRequest>(request);

			var failures = _validators
				.Select(v => v.Validate(context))
				.SelectMany(result => result.Errors)
				.Where(f => f != null)
				.ToList();

			if (failures.Count != 0)
			{
				for (int i = 0; i < failures.Count; i++)
				{
                    _logger.LogError(message: failures[i].ErrorMessage, failures[i]);
                }
				throw new ValidationException([.. failures]);
			}

			return await next();
		}
	}
}
