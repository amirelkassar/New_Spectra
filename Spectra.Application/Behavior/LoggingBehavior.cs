using MediatR;
using Microsoft.Extensions.Logging;
using Spectra.Application.Interfaces;

public class LoggingBehavior<TRequest, TResponse>(ILogger<LoggingBehavior<TRequest, TResponse>> logger, ICurrentUser currentUser) : IPipelineBehavior<TRequest, TResponse>
{
    private readonly ILogger<LoggingBehavior<TRequest, TResponse>> _logger = logger;
    private readonly ICurrentUser _currentUser = currentUser;

    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
    {
        _logger.LogInformation("Handling {RequestName} For User {CurrentUser} with request data: {@Request}", typeof(TRequest).Name, _currentUser.Id, request);

        var response = await next();

        _logger.LogInformation("Handled {RequestName} successfully", typeof(TRequest).Name);

        return response;
    }
}
