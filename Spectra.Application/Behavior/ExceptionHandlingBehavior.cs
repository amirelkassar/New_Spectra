using MediatR;
using Newtonsoft.Json;
using Spectra.Domain.Shared.GlobalExceptions;
namespace Spectra.Infrastructure.PipelineBehaviors
{
	public class ExceptionHandlingBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
	{
		public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
		{
			try
			{
				return await next();
			}
			catch (Exception ex)
			{
				return ExceptionHandlingBehavior<TRequest, TResponse>.HandleException(ex);
			}
		}

		private static TResponse HandleException(Exception exception)
		{
			var errorResponse = new ErrorResponse
			{
				ErrorType = "ServerError",
				ErrorCode = "500",
				ErrorMessage = "An error occurred while processing your request.",
				Success = false,
				ErrorCollection = new Dictionary<string, string[]>
				{
					{ "Exception", new[] { exception.Message } }
				}
			};

			// Serialize the error response to JSON
			var jsonResponse = JsonConvert.SerializeObject(errorResponse);

			// Return the error response
			return JsonConvert.DeserializeObject<TResponse>(jsonResponse);
		}
	}

}
