using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Shared.Wrappers
{
    public class SingleResponse<TData>
    {
        public SingleResponse(TData data, HttpStatusCode code, string message, IDictionary<string, string[]>? erros = null)
        {
            Data = data;
            Code = code;
            Message = message;
            Errors = erros;
            Success = erros is null || erros.Count == 0;
        }
        public SingleResponse(OperationResult<TData> operation)
        {
            Data=operation.Data;
            Code=(HttpStatusCode)operation.Code;
            Message = operation.Message;
            Success=operation.Success;
            Errors=operation.Errors;
        }
        public bool Success { get; }
        public string Message { get; }
        public HttpStatusCode Code { get; }
        public TData Data { get; }
        public IDictionary<string, string[]>? Errors { get; }

        public static SingleResponse<TData> SuccessResponse(TData data, HttpStatusCode code=HttpStatusCode.OK, string message="Valid Operation!")=>new(data, code, message);
        public static SingleResponse<TData> SuccessResponse(OperationResult<TData> operation) => new(operation);
        public static SingleResponse<object?> FaildResponse(IDictionary<string, string[]> erros,HttpStatusCode code = HttpStatusCode.BadRequest, string message = "Invalid Operation!") => new(null, code, message,erros);
        public static SingleResponse<object?> FaildResponse(OperationResult<object?> operation) => new(operation);


    }
}
