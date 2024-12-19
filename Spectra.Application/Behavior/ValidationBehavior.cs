using FluentValidation;
using MediatR;
using Microsoft.Extensions.Logging;
using Spectra.Application.Messaging;

namespace Spectra.Application.Common
{

    public class ValidationBehavior<TRequest, TResponse>(IEnumerable<IValidator<TRequest>> validators,
        ILogger<ValidationBehavior<TRequest, TResponse>> logger) : IPipelineBehavior<TRequest, TResponse>
      
    {
        private readonly IEnumerable<IValidator<TRequest>> _validators = validators;
        private readonly ILogger<ValidationBehavior<TRequest, TResponse>> _logger = logger;

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
                foreach (var failure in failures)
                {
                    _logger.LogError(failure.ErrorMessage);
                }
                throw new ValidationException(failures);
            }

            return await next();
        }
    }
}