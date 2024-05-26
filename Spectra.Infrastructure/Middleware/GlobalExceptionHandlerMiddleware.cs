using Microsoft.AspNetCore.Http;
using MongoDB.Bson.IO;
using Spectra.Application.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using JsonConvert = Newtonsoft.Json.JsonConvert;


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

			// Handle custom exceptions
			if (exception is RequestErrorException)
			{
				errorType = "RequestError";
				errorMessage = exception.Message;
			}
			else if (exception is DbErrorException)
			{
				errorType = "DbError";
				errorMessage = exception.Message;
			}
			else if (exception is ValidationErrorException)
			{
				errorType = "ValidationError";
				errorMessage = exception.Message;
			}
			// Add handling for other custom exception types

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

