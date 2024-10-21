using MediatR;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

using Spectra.Domain.Shared.Common.Exceptions;
using System.Net;


namespace Spectra.WebAPI.Middlewares
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
            var errorCode = "Unknown";
            var success = false;
            var errorCollection = new Dictionary<string, string[]>();

            HttpStatusCode statusCode;
            string errorType;

            switch (exception)
            {
                case FluentValidation.ValidationException validationException:
                    errorType = "ValidationError";
                    statusCode = HttpStatusCode.UnprocessableEntity;


                     errorCollection = validationException.Errors
                        .GroupBy(e => e.PropertyName)
                        .ToDictionary(g => g.Key, g => g.Select(e => e.ErrorMessage).ToArray()); 
                    break;

                case RequestErrorException _:
                    errorType = "RequestError";
                    errorCollection = new Dictionary<string, string[]>
            {
                { "General", new[] { exception.Message } } 
            };
                    statusCode = HttpStatusCode.BadRequest;
                    break;

                case DbErrorException _:
                    errorType = "DbError";
                    errorCollection = new Dictionary<string, string[]>
            {
                { "General", new[] { exception.Message } } 
            };
                    statusCode = HttpStatusCode.InternalServerError;
                    break;

                case NotFoundException notFoundException:
                    errorType = "NotFoundError";
                    errorCollection = new Dictionary<string, string[]>
            {
                { "General", new[] { notFoundException.Message } }
            };
                    statusCode = HttpStatusCode.NotFound;
                    break;

                default:
                    errorType = "UnknownError";
                    errorCollection = new Dictionary<string, string[]>
            {
                { "General", new[] { exception.Message.Trim() } } 
            };
                    statusCode = HttpStatusCode.InternalServerError;
                    break;
            }

            var errorResponse = new 
            {
                errors = errorCollection,
                errorType,
                errorCode,
                success
            };

            var jsonResponse = JsonConvert.SerializeObject(errorResponse);

            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)statusCode;

            return context.Response.WriteAsync(jsonResponse);
        }
    }
}
