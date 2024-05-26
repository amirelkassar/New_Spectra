using MediatR;
using Microsoft.Extensions.Logging;
using System.Threading;
using System.Threading.Tasks;

public class LoggingBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
{
	private readonly ILogger<LoggingBehavior<TRequest, TResponse>> _logger;

	public LoggingBehavior(ILogger<LoggingBehavior<TRequest, TResponse>> logger)
	{
		_logger = logger;
	}

	public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
	{
		_logger.LogInformation("Handling {RequestName} with request data: {@Request}", typeof(TRequest).Name, request);

		try
		{
			var response = await next();
			_logger.LogInformation("Handled {RequestName} successfully", typeof(TRequest).Name);
			return response;
		}
		catch (Exception ex)
		{
			_logger.LogError(ex, "Error handling {RequestName} with request data: {@Request}", typeof(TRequest).Name, request);
			throw;
		}
	}
}
