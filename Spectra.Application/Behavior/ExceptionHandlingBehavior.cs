using MediatR;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

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
				return HandleException(ex);
			}
		}

		private TResponse HandleException(Exception exception)
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

	public class ErrorResponse
	{
		public string ErrorType { get; set; }
		public string ErrorCode { get; set; }
		public string ErrorMessage { get; set; }
		public bool Success { get; set; }
		public Dictionary<string, string[]> ErrorCollection { get; set; }
	}
}
