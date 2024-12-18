using FluentValidation;
using MediatR;
using Microsoft.Extensions.Logging;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;
namespace Spectra.Application.Behavior
{
    public class EventDispatcherBehavior<TRequest, TResponse>(ILogger<EventDispatcherBehavior<TRequest, TResponse>> logger, IPublisher publisher) : IPipelineBehavior<TRequest, TResponse>
    {
        private readonly ILogger<EventDispatcherBehavior<TRequest, TResponse>> _logger = logger;
        private readonly IPublisher _publisher = publisher;

        public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
        {
            var response = await next();
            if (response != null && response is OperationResult operationResult && operationResult.GetEvents().Count > 0)
            {
                foreach (var domainEvent in operationResult.GetEvents())
                {
                    _logger.LogInformation($"Publishing event {domainEvent.Id}");
                    await _publisher.Publish(domainEvent);
                }
                operationResult.ClearEvents();
            }
            return response;
        }
    }
}
