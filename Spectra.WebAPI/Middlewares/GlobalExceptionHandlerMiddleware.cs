using MediatR;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

using Spectra.Domain.Shared.Common.Exceptions;
using System.Net;
using static System.Runtime.InteropServices.JavaScript.JSType;

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

            string? errorMessage;
            HttpStatusCode statusCode;
            switch (exception)
            {
                case ValidationException validationException:
                    errorType = "ValidationError";
                    statusCode = HttpStatusCode.UnprocessableEntity;

                    errorCollection = (Dictionary<string, string[]>)validationException.Errors;
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

                case ValidationException validationException:
                    errorType = "ValidationError";
                    errorMessage = "One or more validation errors occurred.";
                    statusCode = HttpStatusCode.UnprocessableEntity;
                    errorCollection = (Dictionary<string, string[]>)validationException.Errors;
                    break;
                case NotFoundException notFoundException:
                    errorType = "NotFoundError";
                    errorCollection = new Dictionary<string, string[]>
            {
                { "General", new[] { notFoundException.Message } }
            };
                    statusCode = HttpStatusCode.NotFound;
                    break;

                case ForbiddenAccessException forbiddenAccessException:
                    errorType = "ForbiddenAccessError";
                    errorMessage = forbiddenAccessException.Message;
                    statusCode = HttpStatusCode.Forbidden;
                    break;

                case NoDefaultValueException noDefaultValueException:
                    errorType = "NoDefaultValueError";
                    errorMessage = noDefaultValueException.Message;
                    statusCode = HttpStatusCode.BadRequest;
                    break;

                case InvalidValueException invalidValueException:
                    errorType = "InvalidValueError";
                    errorMessage = invalidValueException.Message;
                    statusCode = HttpStatusCode.BadRequest;
                    break;

                case InvalidRequestException invalidRequestException:
                    errorType = "InvalidRequestError";
                    errorMessage = invalidRequestException.Message;
                    statusCode = HttpStatusCode.BadRequest;
                    break;

                case NotImplementedFeatureException notImplementedFeatureException:
                    errorType = "NotImplementedFeatureError";
                    errorMessage = notImplementedFeatureException.Message;
                    statusCode = HttpStatusCode.NotImplemented;
                    break;

                default:
                    errorType = "UnknownError";
                    errorCollection = new Dictionary<string, string[]>
            {
                { "General", new[] { exception.Message } } 
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
