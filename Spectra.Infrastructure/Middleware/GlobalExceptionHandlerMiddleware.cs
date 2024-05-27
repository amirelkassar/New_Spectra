using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Spectra.Application.Exceptions;
using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.Middleware
{
	public class GlobalExceptionHandlerMiddleware
	{
		private readonly RequestDelegate _next;

		public GlobalExceptionHandlerMiddleware(RequestDelegate next)
		{
			_next = next;
		}

		public async Task InvokeAsync(HttpContext context)
		{
			try
			{
				await _next(context);
			}
			catch (Exception ex)
			{
				await HandleExceptionAsync(context, ex);
			}
		}

		private static Task HandleExceptionAsync(HttpContext context, Exception exception)
		{
			var statusCode = HttpStatusCode.InternalServerError;
			var errorType = "Unknown";
			var errorCode = "Unknown";
			var errorMessage = "An error occurred while processing your request.";
			var success = false;
			var errorCollection = new Dictionary<string, string[]>();

			switch (exception)
			{
				case RequestErrorException _:
					errorType = "RequestError";
					errorMessage = exception.Message;
					statusCode = HttpStatusCode.BadRequest;
					break;

				case DbErrorException _:
					errorType = "DbError";
					errorMessage = exception.Message;
					statusCode = HttpStatusCode.InternalServerError;
					break;

				case ValidationException validationException:
					errorType = "ValidationError";
					errorMessage = "One or more validation errors occurred.";
					statusCode = HttpStatusCode.UnprocessableEntity;
					errorCollection = (Dictionary<string, string[]>)validationException.Errors;
					break;


				default:
					errorType = "UnknownError";
					errorMessage = exception.Message;
					statusCode = HttpStatusCode.InternalServerError;
					break;
			}

			var errorResponse = new
			{
				error = new
				{
					errorType,
					errorCode,
					errorMessage,
					success,
					errorCollection
				}
			};

			var jsonResponse = JsonConvert.SerializeObject(errorResponse);

			context.Response.ContentType = "application/json";
			context.Response.StatusCode = (int)statusCode;

			return context.Response.WriteAsync(jsonResponse);
		}
	}
}
